const mongoose = require("mongoose");

const UserRoomSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  },
  { versionKey: false }
);

module.exports = mongoose.model("user_room", UserRoomSchema);
