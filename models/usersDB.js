const db = require("../../dbConfig.js")

//get and return all users 

const getUsers = () => {
    return db("users").orderBy("id", "desc")
}






/* export all functions */

module.exports = {
    getUsers, 
}