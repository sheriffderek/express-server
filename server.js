const express = require('express');
const environment = require('dotenv');
const logger = require('morgan');
const connectDatabase = require('./configuration/db.js') 

const eventRoutes = require('./routes/events');

environment.config( { path: './configuration/config.env' } );
const PORT = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV;

connectDatabase();

const server = express();

if (process.env.NODE_ENV === 'development') {
  server.use(logger("dev"))
}

server.use('/api/v1/events', eventRoutes);

server.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));

process.on('unhandledRejection', function(error, promise) {
  console.log(`Error: ${error.message}`);
  server.close( function() {
    process.exit(1); // exit with 'failure'
  });
});