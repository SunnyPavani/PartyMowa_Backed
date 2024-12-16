const { Booking } = require('../models/BookingSchema');

// Check availability of a room
const checkAvailability = async (req, res) => {
    const { roomId, date, timeSlot } = req.body;
    try {
        const booking = await Booking.findOne({ roomId, date, timeSlot });
        res.json({ available: !booking });
    } catch (error) {
        res.status(500).json({ message: 'Error checking availability', error });
    }
};

// Book a room
const bookRoom = async (req, res) => {
    const { roomId, date, timeSlot, decoration, event, numberOfPersons } = req.body;

    try {
        let cost = 1499;
        if (numberOfPersons > 4) {
            cost += (numberOfPersons - 4) * 400;
        }

        const existingBooking = await Booking.findOne({ roomId, date, timeSlot });
        if (existingBooking) {
            return res.status(400).json({ message: 'Time slot already booked' });
        }

        const booking = new Booking({ roomId, date, timeSlot, decoration, event, numberOfPersons, cost });
        await booking.save();
        res.json({ message: 'Room booked successfully', cost });
    } catch (error) {
        res.status(500).json({ message: 'Error booking room', error });
    }
};

module.exports = { checkAvailability, bookRoom };
