const db = require("../dbConfig");

//get and return all users

const getUsers = () => {
  return db("users").select("username");
};

//add a user to the users table
const registerUser = user => {
  return db("users")
    .insert(user)
    .returning(["id"]);
};

//find out if the user needs to be registered
const registered = email => {
  return db("users").where({ email });
};

//update the users information
const updateUser = (username, id) => {
  return db("users")
    .where({ id })
    .update({ username }, ["username"]);
};

//check if username is available
const getUsername = username => {
//   return db("users").where({ username });
    return db("users").where({ username })
     .count()
};

const deleteUserAccount = (id) => {
    db("users")
    .where({ id })
    .del()
    return getUsers()
}

// const createUser



/* export all functions */

module.exports = {
  getUsers,
  registerUser,
  registered,
  updateUser,
  getUsername,
  deleteUserAccount,
};
