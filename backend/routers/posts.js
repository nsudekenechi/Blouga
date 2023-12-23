const express = require("express")
const router = express.Router()
const { addPost, updatePost, deletePost } = require("../controllers/posts")
router.route("/").post(addPost)
router.route("/:id").patch(updatePost).delete(deletePost)

module.exports = router