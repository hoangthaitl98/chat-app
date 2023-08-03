const { createRoom } = require("../controller/roomController");
const { protect } = require("../middlewares/auth");

const router = require("express").Router();

router.route("/").post(protect, createRoom);

module.exports = router;
