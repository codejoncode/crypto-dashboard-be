require('dotenv').config();
const server = require('./server.js');
const PORT = process.env.PORT || 4001;


server.listen(PORT, (err) => {
    if (err) console.log(err.message);
    console.log(`App running on port ${PORT} of localhost`);
  });