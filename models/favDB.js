const db = require("../../dbConfig.js")

// get and return all user fav's  

const getFavs  = () => {
    return db("favs").orderBy("id", "desc")
}


//export all of the functions 

module.exports = {
    getFavs,
}