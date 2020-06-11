const express = require('express');
const environment = require('dotenv');

environment.config( { path: './configuration/config.env' } );
// .env in root would be default - but this lets me keep things tidy

const server = express();

const PORT = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV;

server.get('/', function(request, response) {
  response.send("It's alive!");
});

server.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));