const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  room_key: {
    type: String,
    required: true,
    trim: true,
  },
  information: {
    type: String,
    required: true,
  },
  pets: {
    type: Boolean,
    required: true,
  },
  breakfast: {
    type: Boolean,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  capacity: Number,
  price: Number,
});

const Room = mongoose.model("RoomDetails", roomSchema);
module.exports = Room;
