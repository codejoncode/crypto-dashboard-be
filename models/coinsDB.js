const db = require("../../dbConfig.js")

//get and return all of the coins 

const getCoins = () => {
    return db("coins").orderBy("id", "desc")
}

module.exports = {
    getCoins,
}