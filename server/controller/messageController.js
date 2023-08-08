const asyncHandler = require("../middlewares/async");
const Message = require("../models/Message");
const io = require("../middlewares/socket-io");
const Room = require("../models/Room");

exports.getListMessage = asyncHandler(async (req, res, next) => {
  const messages = await Message.find({ room: req.params.roomId }).limit(50);

  res.status(200).json({
    success: true,
    data: messages,
  });
});

exports.sendMessage = asyncHandler(async (req, res, next) => {
  const [message, room] = await Promise.all([
    Message.create({ ...req.body, author: req.user }),
    Room.findById(req.body.room),
  ]);
  const { members } = room;
  members
    .filter((user) => user !== req.user._id)
    .forEach((user) => {
      io.emit("send", message, members.find(user));
    });

  res.status(200).json({
    success: true,
    data: message,
  });
});

exports.editMessage = asyncHandler(async (req, res, next) => {
  const message = await Message.findById(req.params.messageId);
});
