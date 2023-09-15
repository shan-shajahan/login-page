const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/login_details");
const express = require("express");
const app = express();

//for user routes
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

// for admin routes
const adminRoute = require("./routes/adminRoute");

//creating port for server to listen

app.use("/admin", adminRoute);
app.listen(3000, () => {
  console.log("server is running");
});


