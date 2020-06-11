const express = require('express');
const router = express.Router();


// CREATE
router.post('/', function(request, response) {
  response.status(200).json({
    success: true,
    message: "Should post an event",
  });
});

// READ
router.get('/', function(request, response) {
  response.status(200).json({
    success: true,
    message: `Show all events`,
    data: {
      events: [1, 2, 3],
    },
  });
});

router.get('/:id', function(request, response) {
  response.status(200).json({
    success: true,
    message: `Show event ${request.params.id}`,
  });
});

// UPDATE
router.put('/:id', function(request, response) {
  response.status(200).json({
    success: true,
    message: `Update event ${request.params.id}`,
  });
});

// DELETE
router.delete('/:id', function(request, response) {
  response.status(200).json({
    success: true,
    message: `Delete event ${request.params.id}`,
  });
});


module.exports = router;