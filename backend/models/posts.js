const mongoose = require("mongoose");

const postsModel = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    subtitle: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    comments: Array,
    reactions: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        default: new Date().toLocaleString("en-us", { dateStyle: "medium" })
    },

    user: mongoose.Types.ObjectId,


})

module.exports = mongoose.model("posts", postsModel)