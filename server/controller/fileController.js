const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/ErrorResponse");
const path = require("path");
const File = require("../models/File");

exports.upload = asyncHandler((req, res, next) => {
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }
  const file = req.files.file;
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }
  // File size
  if (!file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom file name
  file.name = `${Date.now()}${path.parse(file.name).ext}`;
  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.log(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }
    const data = await File.create({
      filename: file.name,
      size: file.size,
      mimetype: file.mimetype,
    });
    res.status(200).json({
      success: true,
      data: data,
    });
  });
});
