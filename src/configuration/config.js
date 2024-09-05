const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mico:mico123@cluster0.xciyc.mongodb.net/jwt");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});


mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});

module.exports = mongoose;  