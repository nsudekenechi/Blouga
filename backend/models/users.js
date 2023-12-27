const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        default: ""
    },
    password: {
        type: String,
        required: true,
    },
    profilePhoto: String,
    type: {
        type: String,
        required: true,
        enum: ["user", "admin"],
        default: "user"
    }
})

module.exports = mongoose.model("users", usersSchema);