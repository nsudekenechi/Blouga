const mongoose = require("mongoose")
const DB_Connect = () => {
    mongoose.connect(process.env.MongoDB_Conn).then().catch(e => {
        console.log(`Error: ${e}`)
    })
}

module.exports = DB_Connect