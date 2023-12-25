const mongoose = require("mongoose");

const categoriesModel = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true
    }
})

module.exports = mongoose.model("categories", categoriesModel);