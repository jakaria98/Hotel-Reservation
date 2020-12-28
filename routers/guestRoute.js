const router = require("express").Router();
const { allGuest } = require("../controllers/roomController");
router.get("/", allGuest);

module.exports = router;
