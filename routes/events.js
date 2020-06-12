const express = require('express');

const {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');

const router = express.Router();


router.route('/')
  .post(createEvent)
  .get(getEvents)
;

router.route('/:id')
  .get(getEvent)
  .put(updateEvent)
  .delete(deleteEvent)
;

module.exports = router;