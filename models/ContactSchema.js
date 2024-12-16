const mongoose = require('mongoose');

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }], // Reference to bookings
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = { Contact };
