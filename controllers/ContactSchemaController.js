const { Contact } = require('../models/ContactSchema');
const { Booking } = require('../models/BookingSchema');

// Add a new contact
const addContact = async (req, res) => {
    const { name, phone } = req.body;
    try {
        const contact = new Contact({ name, phone });
        await contact.save();
        res.status(201).json({ message: 'Contact added successfully', contact });
    } catch (error) {
        res.status(500).json({ message: 'Error adding contact', error });
    }
};

// Get contact details along with bookings
const getContactDetails = async (req, res) => {
    const { contactId } = req.params;
    try {
        const contact = await Contact.findById(contactId).populate('bookings');
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact details', error });
    }
};

// Add a booking to a contact
const addBookingToContact = async (req, res) => {
    const { contactId, bookingDetails } = req.body;
    try {
        const contact = await Contact.findById(contactId);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        const booking = new Booking(bookingDetails);
        await booking.save();

        // Associate the booking with the contact
        contact.bookings.push(booking._id);
        await contact.save();

        res.status(201).json({ message: 'Booking added to contact successfully', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error adding booking to contact', error });
    }
};

module.exports = { addContact, getContactDetails, addBookingToContact };
