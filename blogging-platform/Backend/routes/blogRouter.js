const express = require('express')
const router = express.Router()
const {createBlog, getBlogByType, editBlog,
        deleteBlog, getBlogs} = require('../controllers/blogs')

// const verifyToken = require('../middilwares/auth')

router.post("/", createBlog)
router.get("/", getBlogs)
router.put("/:blogID", editBlog)
router.patch("/:blogID", editBlog)
router.delete("/:blogID",deleteBlog)
router.get("/:type", getBlogByType)

module.exports = router