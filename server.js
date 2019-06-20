const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const morgan = require("morgan");

require('dotenv').config();

const server = express(); 
server.use(express.json())
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

// const db = require('./config.js');  to access database  

server.get("/", (req, res) => {
  res.send(`WeB APP IS RUNNING...`);
});

//Routes/endpoints 

/*Import these  */

// for each route imported  server .use  the end point for that route