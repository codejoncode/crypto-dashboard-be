const express = require("express");
const router = express.Router();
const coinsDB = require("../models/coinsDB");

router.get("/", (req, res) => {
  return coinsDB
    .getCoins()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get coins ${err}` })
    );
});



module.exports = router;
