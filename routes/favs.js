const express = require('express');
const router = express.Router();
const favsDB = require("../models/favsDB")


router.get("/", (req, res) => {
    return favsDB
      .getFavs()
      .then(results => res.status(200).json(results))
      .catch(err => res.status(500).json({error: `Failed to get favs ${err}`}))
})

module.exports = router;