const express = require("express")
const model = require("../models/posts")
// @desc CREATE /api/posts 
const addPost = async (req, res) => {
   try {
      const { title, subtitle, coverImage } = req.body
      if (!title || !subtitle || !coverImage) throw new Error("All fields are required")
      const post = await model.create({ title, subtitle, coverImage, user: req.user })
      res.status(201).json(post);
   } catch (err) {
      res.status(404).json(err.message)
   }


}

//@desc UPDATE /api/posts/:id 
const updatePost = async (req, res) => {
   try {
      if (!req.params.id) throw new Error("Post not Found")
      const { title, subtitle, coverImage, reactions, comments } = req.body;
      const updatedPost = await model.findByIdAndUpdate(req.params.id, { title, subtitle, coverImage, reactions, comments }, { new: true })
      res.status(200).json(updatedPost)
   } catch (err) {
      res.status(400).json(err.message)
   }
}

 

module.exports = {
   addPost,
   updatePost
}