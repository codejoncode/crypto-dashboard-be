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
module.exports = router;
