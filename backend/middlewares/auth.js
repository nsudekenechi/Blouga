const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(404).json("Authorization not found")
    const token = authorization.split(" ")[1];
    try {
        const { id, type } = jwt.verify(token, process.env.JWT_TOKEN)
        req.user = id;
        req.userType = type;
        next()
    } catch (err) {
        res.status(401).json("Unauthorized Token")
    }
}

// Middleware to authenticate admin
const authAdmin = () => {
    return (req, res, next) => {
        if (req.userType != "admin") res.status(403).json("Unauthorized Access")
        next();
    }
}

// middleware that validates forgot Password code
const validateCode = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(404).json("Code not found")
    const code = authorization.split(" ")[1];
    try {
        const { email } = jwt.verify(code, process.env.JWT_TOKEN)
        req.email = email
        next()
    } catch (err) {
        res.status(401).json(err.message)
    }
}


module.exports = {
    auth,
    authAdmin,
    validateCode
}