require("dotenv").config()
const express = require("express");
const app = express()
const DB_Connect = require("./db/db");
const { auth, authAdmin } = require("./middlewares/auth");
const port = process.env.PORT || 5001
const cors = require("cors")

// Connecting to database
DB_Connect();
// Allowing CORS
app.use(cors())
// Telling the type of data body should accept
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api/test", (req,res)=>{
    res.json("Hello")
})
// Specifying the routes for users
app.use("/api/users", require("./routers/users"))
// Specifying the routes for forgotpasword 
app.use("/api/forgotPassword", require("./routers/forgotpassword") )
// Specifying routes for blog posts
app.use("/api/posts", auth, authAdmin(), require("./routers/posts"))
// Specifying routes for blog categories
app.use("/api/posts/categories", auth, authAdmin(), require("./routers/categories"))
// Connecting to server
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
