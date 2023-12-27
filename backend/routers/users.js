const express = require("express")
const router = express.Router()
const { signUp, login, admin } = require("../controllers/users")
const {auth} = require("../middlewares/auth")
router.route("/").post(signUp)
router.route("/login").post(login)
router.route("/admin").patch(auth, admin)

module.exports = router;