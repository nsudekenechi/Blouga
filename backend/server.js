require("dotenv").config()
const express = require("express");
const app = express()
const DB_Connect = require("./db/db")
const port = process.env.PORT

// Connecting to database
DB_Connect();
// Specifying the routes
app.use("/api/users", require("./routers/users"))
// Connecting to server
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
