const express = require("express")
const router = express.Router()
const { addPost, updatePost, deletePost, getPosts } = require("../controllers/posts")
const { authAdmin } = require("../middlewares/auth")
router.route("/").post(addPost).get(getPosts)
router.route("/:id").patch(updatePost).delete(deletePost)

module.exports = router