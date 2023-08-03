const asyncHandler = require("../middlewares/async");
const User = require("../models/User");
const ErrorResponse = require("../utils/ErrorResponse");

// @des     Register user
// @route   POST /api/v1/auth/regiter
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, username, password } = req.body;

  //Create user
  const user = await User.create({
    name,
    username,
    password,
  });

  sendTokenResponse(user, 200, res);
});

// @des     Login user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  //Validate email and password
  if (!username || !password) {
    return next(
      new ErrorResponse("please provide an username and password", 400)
    );
  }

  //Check for user
  const user = await User.findOne({ username });
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  //Check password matched
  if (password !== user.password) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// @des     Get current login user
// @route   GET /api/v1/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    data: user,
  });
});

//Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  //Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};
