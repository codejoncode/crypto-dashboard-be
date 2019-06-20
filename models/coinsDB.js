const db = require("../dbConfig")

//get and return all of the coins 

const getCoins = () => {
    return db("coins").orderBy("id", "desc")
}

module.exports = {
    getCoins,
}