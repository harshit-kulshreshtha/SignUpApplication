const mongoose = require("mongoose");

const schema_1= mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

module.exports = mongoose.model("User", schema_1);