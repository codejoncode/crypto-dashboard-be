const db = require("../dbConfig")

// get and return all user fav's  

const getFavs  = () => {
    return db("favs").orderBy("id", "desc")
}

// get one fav  
const getUserFav = (users_id) => {
    return db("favs")
      .where({users_id})
}

const addFav = async (users_id, coins_id, fav) => {
    // need to get the coins id 
    await db("favs")
      .insert({users_id, coins_id, fav})
    return getUserFav(users_id)
}

const updateUserFav = async (users_id, fav, coins_id) => {
    await db("favs")
      .where({ users_id })
      .update({ fav, coins_id })
    return getUserFav(users_id)
}


//export all of the functions 

module.exports = {
    getFavs,
    getUserFav,
    updateUserFav,
    addFav
}