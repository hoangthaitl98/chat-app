const { register, login, getMe } = require("../controller/authController");
const { protect } = require("../middlewares/auth");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(protect, getMe);

module.exports = router;
