const express = require("express");
const router = express.Router();
const favoritesDB = require("../models/favoritesDB");
const coinsDB = require("../models/coinsDB");

router.get("/", (req, res) => {
  return favoritesDB
    .getFavorites()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get favorites ${err}` })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  return favoritesDB
    .getFavoritesById(id)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req,res) => {
  const { id } = req.params;
  const {favorites } = req.body;
  //capitalize the string as all symbols are uppercased
  const favoritesUpperCase = favorites.toUpperCase();
  let favoritesList = favoritesUpperCase.split(' ');
  //also make sure that there are no duplicates 
  const uniqueFavorites = new Set(favoritesList);
  //turn back into an array
  favoritesList = [...uniqueFavorites];
  //loop over list making sure there is a coin that exists
  for(let favorite of favoritesList){
    coinsDB.getCoinByName(favorite)
    .then(count => {
      //make sure that the coins exist.
      if(Number(count[0].count) === 0){
        return res.status(409).json({ error: `There is no ${favorite} data please remove or check the spelling of the coin symbol ${favorite}. Thank you.`})
      }
      //If the code makes it here all is well and can proceed with updating the favorites
      //for the user matching the id

    })
    .catch(err => console.log(err))
  }

})

module.exports = router;
