const schema = require("../models/forgotPassword");
const userModel = require("../models/users");
const forgotPasswordModel = require("../models/forgotPassword")
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const generateToken = () => {
    let characters = "0123456789";
    let token = ""
    for (let i = 0; i <= 4; i++) {
        token += characters[Math.floor(Math.random() * characters.length)]
    }
    return token
}
// @desc POST /api/forgotPassword
const validateUser = async (req, res) => {
    try {
        const { email, code } = req.body;
        if (!email) throw new Error("Email is required")
        const user = await userModel.findOne({ email })
        if (!user) throw new Error("User not found!");
        const forgotPass = await forgotPasswordModel.findOne({ code })
        if (forgotPass) throw new Error("Code should be unique")
        // let code = generatecode()
        // let hashedPassword = await bycrypt.hash(code, 10)
        await schema.create({ code, email })
        res.status(201).json(code)
    } catch (err) {
        res.status(404).json(err.message)
    }
}

// @desc POST  /api/forgotPassword/validateToken
const validateToken = async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) throw new Error("Code is required")
        const forgotPass = await schema.findOne({ code })
        if (!forgotPass) throw new Error("Invalid code")
        let token = jwt.sign({ email: forgotPass.email }, process.env.JWT_TOKEN)
        res.status(201).json(token)

    } catch (err) {
        res.status(400).json(err.message)
    }
}

// @desc UPDATE /api/forgotPassword/updatePassword
const updateForgotPassword = async (req, res) => {
    
    try {
        const { password } = req.body
        const hashedPassword = await bycrypt.hash(password, 10)
        await userModel.updateOne({ email: req.email }, { password: hashedPassword });
        res.status(201).json("Password Updated")
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports = {
    validateUser,
    validateToken,
    updateForgotPassword
}