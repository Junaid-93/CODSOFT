const express = require('express')
const router = express.Router()
const {createBlog,getBlogByType, editBlogs,
        deleteBlog, getBlogs} = require('../controllers/blogs')

const verifyToken = require('../middilwares/auth')

router.post("/write_now",verifyToken, createBlog)
router.get("/my_blogs",verifyToken, getBlogs)
router.put("/:blogID",verifyToken, editBlogs)
router.patch("/:blogID",verifyToken, editBlogs)
router.delete("/:blogID",verifyToken,deleteBlog)
router.get("/:type", verifyToken, getBlogByType)

module.exports = router