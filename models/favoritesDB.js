const db = require("../dbConfig")

/* get and return all favorites */

const getFavorites = () => {
    return db("favorites").orderBy("id", "desc")
}

const getFavoritesById = (users_id) => {
    return db("favorites")
      .where({ users_id })
}

//When a user registers will create  favorites for them to begin.
const addFavorites = async (users_id, favorites) => {
    return await db("favorites")
      .insert({users_id, favorites})
      .returning(["favorites"])
}
//user wants to add to or make changes to favorites
const updateFavorites = async (users_id, favorites) => {
    await db("favorites")
    .where({ users_id })
    .update({favorites})
    return getFavoritesById(users_id);
}




// export all functions 

module.exports = {
    getFavorites,
    getFavoritesById,
    updateFavorites,
    addFavorites,
}