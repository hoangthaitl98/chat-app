const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/error");
const path = require("path");
const fileUpload = require("express-fileupload");
const swagger = require("./utils/swagger");

dotenv.config({ path: "./.env" });

const app = express();

// CORS
app.use(cors());
// Body-parser
app.use(express.json());
// Cookie-parser
app.use(cookieParser());
// Set static folder
app.use(express.static(path.join(__dirname, "public")));
//File uploading
app.use(fileUpload());
//Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Api routes
const users = require("./routes/user");
const auth = require("./routes/auth");
const file = require("./routes/file");
const room = require("./routes/room");

app.use("/api/v1/users", users);
app.use("/api/v1/auth", auth);
app.use("/api/v1/file", file);
app.use("/api/v1/room", room);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`mongodb connected: ${conn.connection.host}`);
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  swagger(app, PORT);
});
