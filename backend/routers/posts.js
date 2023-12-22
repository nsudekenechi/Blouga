const express = require("express")
const router = express.Router()
const { addPost } = require("../controllers/posts")
router.route("/").post(addPost)

module.exports = router