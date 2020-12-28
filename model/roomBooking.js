const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  nid: {
    type: Number,
    required: true,
  },
  checkingDate: {
    type: Date,
    required: true,
  },
  checkoutDate: {
    type: Date,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
  transactionNumber: {
    type: String,
    required: true,
  },
});

const RoomBook = mongoose.model("RoomBook", bookingSchema);
module.exports = RoomBook;
