const db = require("../dbConfig")

//get and return all users 

const getUsers = () => {
    return db("users").orderBy("id", "desc")
}






/* export all functions */

module.exports = {
    getUsers, 
}