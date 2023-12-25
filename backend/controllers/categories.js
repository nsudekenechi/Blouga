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

// @desc patch /api/posts/categories/:id
const updateCategory = async (req, res) => {
    try {

        const { name } = req.body;
        const note = await model.findByIdAndUpdate(req.params.id, { name })
        res.status(201).json(note)

    } catch (err) {
        res.status(400).json(err.message);
    }
}

//@desc delete /api/posts/categories/:id
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        await model.findByIdAndDelete(id)
        res.status(201).json("Deleted...")
    } catch (err) {
        res.status(400).json(err.message)
    }

}
module.exports = {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
}