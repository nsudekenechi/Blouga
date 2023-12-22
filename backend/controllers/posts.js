const express = require("express")
const model = require("../models/posts")
const addPost = async (req, res) => {
   res.json({ user: req.user, type: req.type })
   // try {
   //    const { title, subtitle, coverImage } = req.body
   //    if (!title || !subtitle || !coverImage) throw new Error("All fields are required")
   //    const post = await model.create({ title, subtitle, coverImage })
   //    res.status(201).json(post);
   // } catch (err) {
   //    res.status(404).json(err.message)
   // }


}


module.exports = {
   addPost
}