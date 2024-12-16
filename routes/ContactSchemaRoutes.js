const express = require('express');
const { addContact, getContactDetails, addBookingToContact } = require('../controllers/ContactSchemaController');

const router = express.Router();

// POST method to add a new contact
router.post('/add', addContact);

// GET method to fetch contact details by ID (with bookings)
router.get('/:contactId', getContactDetails);

// POST method to add a booking to a contact
router.post('/add-booking', addBookingToContact);

module.exports = router;
