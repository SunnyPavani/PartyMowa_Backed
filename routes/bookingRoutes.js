const express = require('express');
const { checkAvailability, bookRoom } = require('../controllers/bookingSchemaController');
const router = express.Router();

router.post('/check-availability', checkAvailability);
router.post('/book-room', bookRoom);

module.exports = router;
