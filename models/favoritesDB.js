const db = require("../dbConfig")

/* get and return all favorites */

const getFavorites = () => {
    return db("favorites").orderBy("id", "desc")
}

const getFavoritesById = (id) => {
    return db("favorites")
      .where({ id })
}

//When a user registers will create  favorites for them to begin.
const addFavorites = (users_id, favorites) => {
    db("favorites")
      .insert({users_id, favorites})
      .returning(["favorites"])
}
//user wants to add to or make changes to favorites
const updateFavorites = (users_id, favorites) => {
    db("favorites")
    .update({favorites})
    .where({ users_id })
    return getFavoritesById(id);
}




// export all functions 

module.exports = {
    getFavorites,
    getFavoritesById,
    updateFavorites,
    addFavorites,
}