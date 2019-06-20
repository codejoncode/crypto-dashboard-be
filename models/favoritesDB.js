const db = require("../../dbConfig.js")

/* get and return all favorites */

const getFavorites = () => {
    return db("favorites").orderBy("id", "desc")
}



// export all functions 

module.exports = {
    getFavorites,
}