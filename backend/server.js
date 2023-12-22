require("dotenv").config()
const express = require("express");
const app = express()
const DB_Connect = require("./db/db");
const auth = require("./middlewares/auth");
const port = process.env.PORT || 5001
// Connecting to database
DB_Connect();
// Telling the type of data body should accept
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Specifying the routes for users
app.use("/api/users", require("./routers/users"))
// Specifying routes for blog posts
app.use("/api/posts", auth, require("./routers/posts"))
// Connecting to server
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
