const usersModel = require("../models/users")
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const JWTSIGN = (id, type) => {
    const token = jwt.sign({ id, type }, process.env.JWT_TOKEN);
    return token;
}
// @ POST /api/users
const signUp = async (req, res) => {
    try {
        const { username, email } = req.body
        if (await usersModel.findOne({ username })) throw new Error("User already exists");//Making sure user doesn't exists
        if (!username || !req.body.password) throw new Error("Fill out required fields");//Making sure there are no empty required fields
        const hashed = await bycrypt.hash(req.body.password, 10);//Hashing password
        // Creating user
        const { password, ...user } = await usersModel.create({ username, email, password: hashed })
        // Creating jwt for user
        const token = JWTSIGN(user._id);

        res.json({ token, user });
    } catch (err) {
        res.status(404).json(err.message)
    }
}
//@desc POST /api/users/login
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await usersModel.findOne({ username })
        if (!user) throw new Error("User Not Found");
        if (!await bycrypt.compare(password, user.password)) throw new Error("Incorrect Password");
        const token = JWTSIGN(user._id, user.type);
        res.status(201).json({ token, user })

    } catch (err) {
        res.status(404).json(err.message)
    }

}

module.exports = {
    signUp,
    login
}