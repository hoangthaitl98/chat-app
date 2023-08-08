const asyncHandler = require("../middlewares/async");
const Room = require("../models/Room");
const User = require("../models/User");
const UserRoom = require("../models/UserRoom");
const ErrorResponse = require("../utils/ErrorResponse");

exports.createRoom = asyncHandler(async (req, res, next) => {
  const [user, room] = await Promise.all([
    User.findById(req.body.counterpart),
    Room.findOne({ members: [req.user._id, req.body.counterpart] }).exec(),
  ]);
  if (room) {
    return next(new ErrorResponse(`Room already exist`, 400));
  }
  if (!room) {
    const newRoom = await Room.create({
      type: "user",
      members: memberList,
      media: user.avatar,
    });
    let response = await newRoom.populate("members");
    res.status(200).json({
      success: true,
      data: response,
    });
  }
});

exports.getRoomList = asyncHandler(async (req, res, next) => {
  const roomList = await Room.find({ members: req.user._id })
    .populate("members")
    .lean();
  const user = await User.findById(req.user._id);
  let newList = roomList.map((room) => {
    return {
      ...room,
      name: room.members.find((item) => item.username !== user.username).name,
    };
  });
  res.status(200).json({
    success: true,
    data: newList,
  });
});
