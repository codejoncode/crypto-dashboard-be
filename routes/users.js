const express = require("express");
const router = express.Router();
const jwtCheck = require("./config/middleware/Auth0.js");
const usersDB = require("../models/usersDB");
const favoritesDB = require("../models/favoritesDB");
const favsDB = require("../models/favsDB");
const coinsDB = require("../models/coinsDB");

router.get("/", (req, res) => {
  return usersDB
    .getUsers()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get users ${err}` })
    );
});

//only testing out the getUsername works
router.get("/:username", (req, res) => {
  const { username } = req.params;
  let userExists;
  usersDB
    .getUsername(username)
    .then(count => {
      //data will come back in the form of a string
      if (Number(count[0].count) > 0) {
        userExists = true;
        console.log(`userExits ${userExists}`);
      }
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json({ err }));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(typeof id);
  await usersDB
    .deleteUserAccount(Number(id))
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
});

router.post("/", async (req, res) => {
  const defaultFavorites = "BTC ETH XMR DOGE";
  const defaultFav = "BTC";
  const { username, email, name, picture } = req.body;
  let favorites = [];
  let fav = [];
  let user = [];
  console.log(picture);
  console.log(typeof picture);
  let moveForward = true;
  let finalUserName;
  /* Make sure the username email and name exist */
  if (!username) {
    moveForward = false;
    return res.status(422).json({ error: "username is missing but required" });
  } else if (!email) {
    moveForward = false;
    return res.status(422).json({ error: "email is missing but required" });
  } else if (!name) {
    moveForward = false;
    return res.status(422).json({ error: "name is missing but required" });
  } else if (!picture) {
    moveForward = false;
    return res.status(422).json({ error: "picture is missing but required" });
  }
  /*check if the email already exists if it does no further actions are needed */
  console.log("checking if the user has already signed up");
  if (moveForward === true) {
    await usersDB
      .registered(email)
      .then( async results => {
        if (results.length > 0) {
          moveForward = false;
          let moveForward2 = true; 
          // NOTHING MORE NEEDED USER ALREADY EXISTS
          //go get the favorites  
          await favoritesDB 
            .getFavoritesById(results[0].id)
            .then(results => {
              console.log(`This right here is the favorites ${results[0].favorites}`)
              favorites = results[0].favorites
            })
            .catch(error => {
              moveForward2 = false 
              console.log(`Error on line 87 while trying to get favorites by id ${error}`)
              return res.status(500).json({error })
            })
        if (moveForward2 === true){
             // go the favs
             await favsDB
               .getUserFav(results[0].id)
               .then(results => {
                 console.log(`this is the fav ${results[0].fav}`)
                 fav = results[0].fav
               })
               .catch(error => {
                 console.log(`Issue getting user fav ${error}`)
                 moveForward2 = false 
                 return res.status(500).json(error)
               })
           }

        if(moveForward2 === true){
          return res.status(200).json({user : results[0], fav, favorites});
        }
        }
      })
      .catch(error => {
        moveForward = false;
        res
          .status(500)
          .json({ error: `Problem verifying if user already exists ${error}` });
      });
  }
  console.log("checking the users username uniqueness");
  if (moveForward === true) {
    await usersDB
      .getUsers()
      .then(results => {
        const usernames = [...results]
          .filter(
            user =>
              user.username[0] === username[0] &&
              user.username[1] &&
              username[1]
          )
          .map(user => user.username);
        //if the data was larget this will make it smaller based off first two characters.
        //fitler goes through each one for O^N  and  map does the same  O^N  happens after each other so
        //  2O^N   overall it should makes the next step even smaller.  Not a big deal unless there was millions of users but a practice
        let one = username;
        let two = username.slice(0, username.length - 1);
        let three = username + username[-1];
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        console.log("username name going through loop of uniqueness");
        while (true) {
          let index = Math.floor(Math.random() * characters.length);
          if (usernames.includes(one) === false) {
            finalUserName = one;
            break;
          } else if (usernames.includes(two) === false) {
            finalUserName = two;
            break;
          } else if (usernames.includes(three) === false) {
            finalUserName = three;
            break;
          }
          one += characters[index];
          two += characters[index];
          three += characters[index];

          // if (one.length > 16){

          // }

          // if (two.length > 16){

          // }
          // if (three.length > 16){

          // }
        }
      })
      .catch(error => {
        moveForward = false;
        return res
          .status(500)
          .json({ error: `Problem checking users ${error}` });
      });
  }
  console.log("now about to register the user");
  if (moveForward === true) {
    const body = {
      name,
      email,
      picture,
      username: finalUserName.toLowerCase() // all user names  lower case.
    };
    usersDB
      .registerUser(body)
      .then(async results => {
        //grab the id
        let users_id = results[0].id;
        console.log("setting the users favorites");
        //set default favorites
        await favoritesDB
          .addFavorites(users_id, defaultFavorites)
          .then(results => {
            console.log(`succesfful adding favorites ${results}`)
            favorites = results[0].favorites;
          })
          .catch(error => {
            console.log(`we have an error on line 165 ${error}`);
            moveForward = false;
            return res
              .status(500)
              .json({ error: `Issue getting favorites added in ${error}` });
          });
        if (moveForward === true) {
          console.log("users favorites set");
          await coinsDB
            .getCoinByName(defaultFav)
            .then(results => {
              console.log(results)
              coins_id = results[0].id;
              console.log(`Successfully getting coin id ${coins_id}`);
            })
            .catch(error => {
              console.log(`An error exists  on line 181 after trying to getCoinByName ${error}`);
              moveForward = false;
              return res
                .status(500)
                .json({ error: `Problem setting the users fav coin ${error}` });
            });
        }

        if (moveForward === true) {
          console.log("setting default fav");
          //set default fav
          await favsDB
            .addFav(users_id, coins_id, defaultFav)
            .then(results => {
              fav = results[0].fav;
              console.log("got through setting the fav");
            })
            .catch(error => {
              moveForward = false;
              console.log("did not get through setting the fav");
              return res
                .status(500)
                .json({
                  error: `Problem setting the users default fav ${error}`
                });
            });
        }
        if (moveForward === true) {
          //okay now send the status
          console.log(`Should be sending the 200 status`)
          return res.status(200).json({user : results[0], favorites, fav});
        }
      })
      .catch(error => {
        console.log(`What went wrong at the end? ${error}`)
        res.status(500).json({ error: `Problem registering the user ${error}` })

      }
      );
  }
});

// update the users  username
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const finalUserName = username.toLowerCase();
  console.log(username);
  let moveForward = true;
  if (!username || username.length < 3 || username.length > 16) {
    moveForward = false;
    return res
      .status(422)
      .json({
        error: `The username property is required if you wish to change it. Username length is required to be more than 3 characters and less than 17`
      });
  }
  if (moveForward === true) {
    await usersDB
      .getUsers()
      .then(results => {
        const usernames = results.map(user => user.usernames);
        if (usernames.includes(finalUserName) === true) {
          moveForward = false;
          return res
            .status(422)
            .json({ error: `That username is not available ${error}` });
        }
      })
      .catch(error =>
        res
          .status(500)
          .json({
            error: `Issue with checking if username already exists ${error}`
          })
      );
  }

  if (moveForward === true) {
    await usersDB
      .updateUser(finalUserName, id)
      .then(results => res.status(200).json(results))
      .catch(error =>
        res
          .status(500)
          .json({ error: `Issue with updating the username ${error}` })
      );
  }
});
module.exports = router;
