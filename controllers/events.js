
// @desc        Create an event
// @route       POST  /api/v1/events
// @access      Private
exports.createEvent = function(request, response, next) {
  response.status(200).json({
    success: true,
    message: "Should post an event",
  });
}

// @desc        Get all events (well... more like 20 at a time, right?)
// @route       GET  /api/v1/events
// @access      Public
exports.getEvents = function(request, response, next) {
  response.status(200).json({
    success: true,
    message: `Show all events`,
    data: {
      events: [1, 2, 3],
    },
  });
}

// @desc        Get an event
// @route       GET  /api/v1/events/:id
// @access      Public
exports.getEvent = function(request, response, next) {
  response.status(200).json({
    success: true,
    message: `Show event ${request.params.id}`,
  });
}

// @desc        Update an event
// @route       PUT  /api/v1/events/:id
// @access      Private
exports.updateEvent = function(request, response, next) {
  response.status(200).json({
    success: true,
    message: `Update event ${request.params.id}`,
  });
}

// @desc        Delete an event
// @route       DELETE  /api/v1/events/:id
// @access      Private
exports.deleteEvent = function(request, response, next) {
  response.status(200).json({
    success: true,
    message: `Delete event ${request.params.id}`,
  });
}
