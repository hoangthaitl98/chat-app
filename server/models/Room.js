const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  type: {
    type: String,
    enum: ["user", "group"],
    default: "user",
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  media: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "File",
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", RoomSchema);
