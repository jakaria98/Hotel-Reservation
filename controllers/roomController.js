const RoomInfo = require("../model/roomDetails");

//const roomValidator = require("../validator/roomInfoValidator");
const roomBookingValidator = require("../validator/roomBookingValidator");
const { serverError, resourceError } = require("../util/error");
const RoomBook = require("../model/roomBooking");
//console.log(RoomBook.find());
module.exports = {
  allGuest(req, res) {
    //console.log("all guest");
    RoomBook.find()
      .then((persons) => {
        //console.log(persons);
        res.status(200).json(persons);
      })
      .catch((error) => serverError(res, error));
  },
  allRooms(req, res) {
    console.log("all rooms");
    RoomInfo.find()
      .then((rooms) => {
        res.status(200).json(rooms);
      })
      .catch((error) => serverError(res, error));
  },
  getSingleRoom(req, res) {
    let { _id } = req.params;
    RoomInfo.findById(_id)
      .then((room) => {
        if (!room) {
          res.status(200).json({
            message: "No Room Found",
          });
        } else {
          res.status(200).json(room);
        }
      })
      .catch((error) => serverError(res, error));
  },
  updateRoom(req, res) {
    let { _id } = req.params;
    RoomInfo.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
      .then((result) => {
        res.status(200).json({
          message: "Updated Successfully",
          ...result,
        });
      })
      .catch((error) => serverError(res, error));
  },
  // all guest

  // book a room
  bookRoom(req, res) {
    let {
      name,
      email,
      nid,
      checkingDate,
      checkoutDate,
      roomName,
      transactionNumber,
    } = req.body;
    let validate = roomBookingValidator({
      name,
      email,
      nid,
      checkingDate,
      checkoutDate,
      roomName,
      transactionNumber,
    });

    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    } else {
      RoomBook.findOne({
        transactionNumber,
      })
        .then((room) => {
          if (room) {
            return resourceError(res, "Already Booked");
          }
          let newBook = new RoomBook({
            name,
            email,
            nid,
            checkingDate,
            checkoutDate,
            roomName,
            transactionNumber,
          });
          newBook
            .save()
            .then((room) => {
              res.status(201).json({ message: "Room Booked", room });
            })
            .catch((error) => serverError(res, error));
        })
        .catch((error) => serverError(res, error));
    }
  },
};
