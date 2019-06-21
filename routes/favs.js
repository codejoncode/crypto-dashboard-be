const express = require('express');
const router = express.Router();
const favsDB = require("../models/favsDB");
const coinsDB = require("../models/coinsDB");

router.get("/", (req, res) => {
    return favsDB
      .getFavs()
      .then(results => res.status(200).json(results))
      .catch(err => res.status(500).json({error: `Failed to get favs ${err}`}))
})

router.put("/:id", (req, res) => {
  let moveForward = true; 
  const { id } = req.params;
  const { fav } = req.body; 
  const favUpperCase = fav.toUpperCase(); 
  coinsDB.getCoinByName(favUpperCase)
  .then(count => {
    if(Number(count[0].count) === 0){
      moveForward = false; 
      return res.status(409).json({ error: `There is no ${favUpperCase} data please remove or check the spelling of the coin symbol ${favUpperCase}. Thank you.`})
    }
  })
  .catch(err => res.status(500).json(err))

  if (moveForward === true){
    return favsDB
      .updateUserFav(id, favUpperCase)
      .then(results => res.status(200).json(results))
      .catch(err => res.status(500).json(err))
  }
    
})

module.exports = router;