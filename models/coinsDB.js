const db = require("../dbConfig")

//get and return all of the coins 

const getCoins = () => {
    return db("coins").orderBy("id", "desc")
}

const getCoinByName = (coin) => {
    return db("coins").where({coin}).count();
}

module.exports = {
    getCoins,
    getCoinByName,
}