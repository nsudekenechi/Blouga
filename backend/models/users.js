const mongoose = require("mongoose");
const generateUserId = () => {
    let userid = "";
    let char = "abcdefghijklmnopqrstuvwxyz0123456789"
    for (i = 1; i < 6; i++) {
        userid += char[Math.floor(Math.random() * char.length)]
    }
    return userid
}
const usersSchema = new mongoose.Schema({
    userid: {
        type: String,
        default: generateUserId()
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("users", usersSchema);