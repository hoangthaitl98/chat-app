const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    type: {
      type: String,
      enum: ["text", "file"],
      default: "text",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.Model("Message", MessageSchema);
