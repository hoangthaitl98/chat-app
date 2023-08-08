const { createRoom, getRoomList } = require("../controller/roomController");
const { protect } = require("../middlewares/auth");

const router = require("express").Router();

router.route("/").post(protect, createRoom);
router.route("/").get(protect, getRoomList);

module.exports = router;
