const db = require("../dbConfig")

/* get and return all favorites */

const getFavorites = () => {
    return db("favorites").orderBy("id", "desc")
}



// export all functions 

module.exports = {
    getFavorites,
}