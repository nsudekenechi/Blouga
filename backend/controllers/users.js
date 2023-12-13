// @ GET /api/users
const signUp = (req, res) => {
    try {
        res.json({ mess: "Hiii" })
    } catch (err) {
        res.status(404).json(err)
    }
}
//@desc POST /api/users


module.exports = {
    signUp
}