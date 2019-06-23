const express = require('express');
const router = express.Router();
const jwtCheck = require("../config/middleware/Auth0");
const favsDB = require("../models/favsDB");
const coinsDB = require("../models/coinsDB");

router.get("/", (req, res) => {
    return favsDB
      .getFavs()
      .then(results => res.status(200).json(results))
      .catch(err => res.status(500).json({error: `Failed to get favs ${err}`}))
})

router.put("/:id", jwtCheck, async (req, res) => {
  let moveForward = true; 
  let coins_id; //user likely won't have the coins id so I am going to allow
  const { id } = req.params;
  const { fav } = req.body; 
  const favUpperCase = fav.toUpperCase(); 
  await coinsDB.getCoinByName(favUpperCase)
  .then(results => {
    console.log(results)
     coins_id = results[0].id; 
    if(!coins_id){
      moveForward = false; 
      return res.status(409).json({ error: `There is no ${favUpperCase} data please remove or check the spelling of the coin symbol ${favUpperCase}. Thank you.`})
    }
  })
  .catch(err => res.status(500).json(err))

  if (moveForward === true){
    console.log(coins_id)
    return favsDB
      .updateUserFav(id, favUpperCase, coins_id)
      .then(results => res.status(200).json(results))
      .catch(err => res.status(500).json(err))
  }
    
})

module.exports = router;