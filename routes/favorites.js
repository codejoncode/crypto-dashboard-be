const express = require("express");
const router = express.Router();
const favoritesDB = require("../models/favoritesDB");

router.get("/", (req, res) => {
  return favoritesDB
    .getFavorites()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get favorites ${err}` })
    );
});

module.exports = router;
