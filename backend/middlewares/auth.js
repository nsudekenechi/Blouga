const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(404).json("Authorization not found")
    const token = authorization.split(" ")[1];
    try {
        const { id,type } = jwt.verify(token, process.env.JWT_TOKEN)
        req.user = id
        req.type = type
        next()
    } catch (err) {
        req.status(401).json("Unauthorized Token")
    }
}

module.exports = auth