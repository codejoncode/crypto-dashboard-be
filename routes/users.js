const express = require("express");
const router = express.Router();
const usersDB = require("../models/usersDB");

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
      if( Number(count[0].count) > 0 ){
        userExists = true;
        console.log(`userExits ${userExists}`)
      }
      res.status(200).json(count)})
    .catch(err => res.status(500).json({ err }));
});
module.exports = router;
