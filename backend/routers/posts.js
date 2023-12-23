const express = require("express")
const router = express.Router()
const { addPost, updatePost } = require("../controllers/posts")
router.route("/").post(addPost)
router.route("/:id").patch(updatePost)

module.exports = router