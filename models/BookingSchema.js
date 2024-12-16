const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    roomId: mongoose.Schema.Types.ObjectId,
    date: String,
    timeSlot: String,
    decoration: Boolean,
    event: String,
    numberOfPersons: Number,
    cost: Number,
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = { Booking };
