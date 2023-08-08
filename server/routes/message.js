const {
  sendMessage,
  getListMessage,
} = require("../controller/messageController");
const { protect } = require("../middlewares/auth");

const router = require("express").Router();

router.route("/{roomId}").get(protect, getListMessage);
router.route("/").post(protect, sendMessage);

module.exports = router;
