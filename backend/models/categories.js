const mongoose = require("mongoose");

const categoriesModel = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model("categories", categoriesModel);