require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT

// Connecting to server
express().listen(port, () => {
    console.log("Connected")
 })
