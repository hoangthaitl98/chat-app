const { upload } = require("../controller/fileController");
const { protect } = require("../middlewares/auth");

const router = require("express").Router();

router.route("/upload").post(protect, upload);

module.exports = router;
