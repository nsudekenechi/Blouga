const express = require("express")
const router = express.Router()
const { signUp, login } = require("../controllers/users")
router.route("/").post(signUp)
router.route("/login").post(login)


module.exports = router;