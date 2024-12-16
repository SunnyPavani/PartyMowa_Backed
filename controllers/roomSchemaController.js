const { Room } = require('../models/RoomSchema');

// Fetch rooms and their time slots
const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rooms', error });
    }
};

module.exports = { getRooms };
