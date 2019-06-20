const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

//Routes/endpoints

/*Import these  */
const {
  coinsRouter,
  usersRouter,
  favoritesRouter,
  favsRouter
} = require("./routes/index");

require("dotenv").config();

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

// const db = require('./config.js');  to access database

server.get("/", (req, res) => {
  res.send(`WeB APP IS RUNNING...`);
});

// for each route imported  server .use  the end point for that route
server.use("/users", usersRouter);
server.use("/favs", favsRouter);
server.use("/favorites", favoritesRouter);
server.use("/coins", coinsRouter);

module.exports = server;
