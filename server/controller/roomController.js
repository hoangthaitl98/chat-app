const asyncHandler = require("../middlewares/async");
const Room = require("../models/Room");
const User = require("../models/User");
const ErrorResponse = require("../utils/ErrorResponse");

exports.createRoom = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.body.counterpart);
  let memberList = [req.user._id, req.body.counterpart];
  const room = await Room.findOne({ members: memberList }).exec();
  if (room) {
    return next(new ErrorResponse(`Room already exist`, 400));
  }
  if (!room) {
    const newRoom = await Room.create({
      name: user.name,
      type: "user",
      members: memberList,
      media: user.avatar,
    });
    res.status(200).json({
      success: true,
      data: newRoom,
    });
  }
});
