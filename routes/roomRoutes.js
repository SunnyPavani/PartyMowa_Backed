const express = require('express');
const { getRooms } = require('../controllers/roomSchemaController');
const { Room } = require('../models/RoomSchema');
const router = express.Router();

// GET method for fetching rooms
router.get('/rooms', getRooms);

// POST method for creating a new room
router.post('/rooms', async (req, res) => {
    try {
        const { name, timings } = req.body;
        const newRoom = new Room({ name, timings });
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: 'Error creating room', error });
    }
});

module.exports = router;
