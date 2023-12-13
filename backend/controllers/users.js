const usersModel = require("../models/users")
// @ POST /api/users
const signUp = async (req, res) => {
    try {
        const { username, email, password, type } = req.body;
        console.log(username)
    } catch (err) {
        res.status(404).json(err)
    }
}
//@desc POST /api/users


module.exports = {
    signUp
}