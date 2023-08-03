const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
    },
    size: {
      type: Number,
    },
    mimetype: {
      type: String,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("File", FileSchema);
