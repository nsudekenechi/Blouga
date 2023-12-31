const express  = require("express")
const { validateUser,validateToken ,updateForgotPassword} = require("../controllers/forgotpassword")
const { validateCode } = require("../middlewares/auth")

const router = express.Router()
router.route("/").post(validateUser)
router.route("/validate").post(validateToken)
router.route("/update").patch(validateCode, updateForgotPassword)

module.exports = router