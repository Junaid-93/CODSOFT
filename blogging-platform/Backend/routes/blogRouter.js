const express = require('express')
const router = express.Router()
const {createBlog, getBlogByType, editBlog,
        deleteBlog, getBlogs} = require('../controllers/blogs')

const verifyToken = require('../middilwares/auth')

router.post("/",verifyToken, createBlog)
router.get("/", verifyToken,getBlogs)
router.put("/:blogID",verifyToken, editBlog)
router.delete("/:blogID",verifyToken,deleteBlog)
router.get("/:type",verifyToken, getBlogByType)

module.exports = router