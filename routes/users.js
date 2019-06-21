const express = require("express");
const router = express.Router();
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
  const { username, email, name } = req.body;
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
  }
  /*check if the email already exists if it does no further actions are needed */
  if (moveForward === true) {
    await usersDB
      .registered(email)
      .then(results => {
        if (results.length > 0) {
          moveForward = false;
          // NOTHING MORE NEEDED USER ALREADY EXISTS
          return res.status(200).json(results);
        }
      })
      .catch(error => {
        moveForward = false;
        res.status(500).json({error : `Problem verifying if user already exists ${error}`});
      });
  }

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
        let three = (username + username[-1]);
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

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
        }
      })
      .catch(error => {
        moveForward = false;
        return res.status(500).json({error : `Problem checking users ${error}`});
      });
  }

  if (moveForward === true) {
    const body = {
      name,
      email,
      username: finalUserName
    };
    usersDB
      .registerUser(body)
      .then(async results => {
        //grab the id
        let users_id = results[0].id;

        //set default favorites
        await favoritesDB.addFavorites(users_id, defaultFavorites);
        await coinsDB
          .getCoinByName(defaultFav)
          .then(results => {
            coins_id = results[0].id;
          })
          .catch(error => {
            moveForward = false;
            res.status(500).json({error : `Problem setting the users fav coin ${error}`});
          });
        await favsDB.addFav(users_id, coins_id, defaultFav);
        //set default fav
        if (moveForward === true) {
          //okay now send the status
          res.status(200).json(results);
        }
      })
      .catch(error => res.status(500).json({error : `Problem registering the user ${error}`}));
  }

  // add default favorites

  //add default fav
});
module.exports = router;
