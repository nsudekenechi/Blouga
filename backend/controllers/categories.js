const model = require("../models/categories");
// @desc GET /api/posts/categories 
const getCategories = async (req, res) => {
    try {
        const categories = await model.find();
        res.status(201).json(categories)
    } catch (err) {
        res.status(400).json(err.message)
    }
}
// @desc CREATE /api/posts/categories  
const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) throw new Error("Fields cannot be empty")
        const category = await model.create({ name })
        res.status(201).json(category)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

// @desc patch /api/posts/categories /:id


module.exports = {
    addCategory
}