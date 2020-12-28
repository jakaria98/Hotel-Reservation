const router = require("express").Router();
const {
  allRooms,
  getSingleRoom,
  updateRoom,
  bookRoom,
} = require("../controllers/roomController");

router.get("/", allRooms);
router.post("/book-room", bookRoom);
router.get("/:_id", getSingleRoom);
router.put("/:_id", updateRoom);
module.exports = router;
