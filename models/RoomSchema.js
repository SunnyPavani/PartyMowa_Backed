const mongoose = require('mongoose');

// Room Schema
const roomSchema = new mongoose.Schema({
    name: String
});

const Room = mongoose.model('Room', roomSchema);
module.exports = { Room };
