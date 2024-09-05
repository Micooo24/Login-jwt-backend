const mongoose = require("../configuration/config");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:{type: String, enum: ['admin', 'user'], default: 'user'},

});


module.exports = mongoose.model("User", userSchema);
