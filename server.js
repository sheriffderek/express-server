const express = require('express');
const environment = require('dotenv');

environment.config( { path: './configuration/config.env' } );
// .env in root would be default - but this lets me keep things tidy

const server = express();

const PORT = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV;


// CREATE
server.post('/api/v1/events', function(request, response) {
  response.status(200).json({
    success: true,
    message: "Should post an event",
  });
});

// READ
server.get('/api/v1/events', function(request, response) {
  response.status(200).json({
    success: true,
    message: `Show all events`,
    data: {
      events: [1, 2, 3],
    },
  });
});

server.get('/api/v1/events/:id', function(request, response) {
  response.status(200).json({
    success: true,
    message: `Show event ${request.params.id}`,
  });
});

// UPDATE
server.put('/api/v1/events/:id', function(request, response) {
  response.status(200).json({
    success: true,
    message: `Update event ${request.params.id}`,
  });
});

// DELETE
server.delete('/api/v1/events/:id', function(request, response) {
  response.status(200).json({
    success: true,
    message: `Delete event ${request.params.id}`,
  });
});


server.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));