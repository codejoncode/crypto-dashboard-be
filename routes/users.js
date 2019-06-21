const express = require("express");
const router = express.Router();
const usersDB = require("../models/usersDB");
const favoritesDB = require("../models/favoritesDB");
const favsDB = require("../models/favsDB");

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

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(typeof id);
  usersDB
    .deleteUserAccount(Number(id))
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
});

router.post("/", async (req, res) => {
  const defaultFavorites = "BTC ETH XMR DOGE";
  const defaultFav = "BTC";
  const {username, email, name} = req.body; 
  let moveForward = true; 
  let finalUserName; 
  /* Make sure the username email and name exist */
  if(!username){
    moveForward = false; 
    return res.status(422).json({error: "username is missing but required"})
  } else if (!email){
    moveForward = false; 
    return res.status(422).json({error: "email is missing but required"})
  } else if (!name){
    moveForward = false; 
    return res.status(422).json({error: "name is missing but required"})
  }
  /*check if the email already exists if it does no further actions are needed */
  if(moveForward === true){
    await usersDB 
      .registered(email)
      .then(results => {
        if(results.length > 0){
          moveForward = false; 
          // NOTHING MORE NEEDED USER ALREADY EXISTS
          return res.status(200).json(results)
        }
      })
      .catch(error => {
        moveForward = false; 
        res.status(500).json(error)})
  }
  
  if (moveForward === true){
    await usersDB 
      .getUsers()
      .then(results => {
        const usernames = results.filter(user => user.username[0] === username[0] && user.username[1] && username[1] ).map(user => user.username)
        //if the data was larget this will make it smaller based off first two characters. 
        //fitler goes through each one for O^N  and  map does the same  O^N  happens after each other so 
        //  2O^N   overall it should makes the next step even smaller.  Not a big deal unless there was millions of users but a practice
        let one = username; 
        let two = username.slice(0,data.length-1); 
        let three = username += username[-1]
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

        while (true){
          var index = Math.floor(Math.random() * characters.length);
          if(usernames.includes(one) === false){
            finalUserName = one
            break; 
          } else if (usernames.includes(two) === false){
            finalUserName = two 
            break; 
          } else if (usernames.includes(three) === false){
            finalUserName = three
            break;
          }
          one += characters[index];
          two += characters[index];
          three += characters[index];
        }
      })
      .catch(error => {
        moveForward = false;
        return res.status(500).json(error)
      })
  }

  if(moveForward === true){
    usersDB
      .registerUser(req.body)
      .then(results => res.status(200).json(results))
      .catch(error => res.status(500).json(error));
  }

  // add default favorites 

  //add default fav 

});
module.exports = router;
