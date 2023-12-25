const express = require("express")
const router = express.Router();
const {getCategories,addCategory,updateCategory, deleteCategory} = require("../controllers/categories")

router.route("/").get(getCategories).post(addCategory)
router.route("/:id").patch(updateCategory).delete(deleteCategory)

module.exports = router;