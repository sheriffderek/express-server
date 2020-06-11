const express = require('express');
const environment = require('dotenv');

const eventRoutes = require('./routes/events');

environment.config( { path: './configuration/config.env' } );
// .env in root would be default - but this lets me keep things tidy

const server = express();

const PORT = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV;


server.use('/api/v1/events', eventRoutes);


server.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));