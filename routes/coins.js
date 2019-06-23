const express = require("express");
const router = express.Router();
const jwtCheck = require("../config/middleware/Auth0");
const coinsDB = require("../models/coinsDB");

router.get("/", jwtCheck,(req, res) => {
  return coinsDB
    .getCoins()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get coins ${err}` })
    );
});



module.exports = router;
