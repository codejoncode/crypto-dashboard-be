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

const updateUserFav = async (users_id, fav) => {
    await db("favs")
      .where({ users_id })
      .update({ fav })
    return getUserFav(users_id)
}


//export all of the functions 

module.exports = {
    getFavs,
    getUserFav,
    updateUserFav,
}