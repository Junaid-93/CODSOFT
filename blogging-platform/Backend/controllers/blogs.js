const express = require('express')
const app = express()
const user = require('../models/userModel')
const blogs = require('../models/blogModel')
const mongoose = require('mongoose')

const createBlog = async (req, res) => {
    const { title, category, content } = req.body
    console.log(req.body);
    console.log(req.user);

    try {
        // create blog
        // req.user is coming from verifyToken middleware ---------------??????
        // console.log(req.user)
        const blog = await blogs.create({
            userId: req?.user?.id,
            title,
            category,
            content,
            date: new Date().toDateString().slice(3)
        })
        res.status(201).json({
            success: true,
            message: 'Successfully added',
            blog
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//@route GET /api/blogs
//@desc Get all blogs
//@access Private ------------------------????

// }
const getBlogs = async (req, res) => {
    try {
        const Blogs = await blogs.find({
            userId: new mongoose.Types.ObjectId(req.user.id),
        })
        if (Blogs.length == 0) {
            return res
                .status(404)
                .json({ message: 'Blogs Not Found, Add New' })
        }
        res.status(200).json({ Blogs: Blogs })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//@route PUT/PATCH /api/blogs/:blogId
//@desc  Update blogs
//@access Private
const editBlog = async (req, res) => {
    // const { exerciseName, exerciseType, duration, date, details } = req.body
    console.log('params',req.params);
    try {
        // select blog to update
        // console.log(req.params.blogId)
        const Blog = await blogs.findOne({_id:req.params.blogID})
        // console.log(exercise)
        if (!Blog) {
            res.status(404).json({
                message:
                    'Blog Not found with this id make sure to add correct id of Blog you want to edit',
            })
        }
        // Get user from token => req.user.id coming from token payload(req.user)
        // const User = await user.findById(req.user.id)

        // if (!User) {
        //     res.status(403).json({ message: 'You are not allowed to Edit' })
        // }
        // console.log(user)
        // Now update blog
        const updatedBlog = await blogs.findByIdAndUpdate(
            { _id: req.params.blogID },
            req.body,
            { new: true, runValidators: true }
        )
        res.status(200).json(updatedBlog)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//@route DELETE /api/blog/:blogId
//@desc delete blog
//@access Private
const deleteBlog = async (req, res) => {
    const Blog = await blogs.findById(req.params.blogId)

    if (!Blog) {
        res.status(404).json({ message: 'Blog Not Found' })
    }
    const User = await user.findById(req.user.id)
    if (!User) {
        res.status(404).json({ message: 'User Not Found' })
    }

    if (Blog.userId.toString() !== req.user.id) {
        res.status(401).json({
            message:
                "User who created blog and user who want to delete blog did't match"
        })
    }
    // Blog.remove()
    const removedBlog = await blogs.findByIdAndRemove(Blog._id)
    // console.log(removedBlog)
    res.status(200).json({ message: 'Blog Removed' })
}
// todo Create This endpoint
//@route GET /api/blog/:type
//@desc Get blog By Type
//@access Private
const getBlogByType = async (req, res) => {
    const User = await user.findById(req.user.id)
    try {
        if (!User) {
            res.status(401).json({ message: 'You are not Authentic user.' })
        }
        const BlogsOfType = await blogs.find({
            BlogType: req.params.type,
        })
        res.json({ 'check type': BlogsOfType })
    } catch (error) {
        res.status(501).json({ message: error.message })
    }
}

module.exports = {
    createBlog,
    getBlogs,
    editBlog,
    deleteBlog,
    getBlogByType
}
