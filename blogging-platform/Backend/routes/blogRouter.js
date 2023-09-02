const express = require('express')
const router = express.Router()
const {createBlog,getBlogByType, editBlogs,
        deleteBlog,getBlogByType, getBlogs} = require('../controllers/blogs')

const verifyToken = require('../middilwares/auth')

router.post("/write_now",verifyToken, createBlog)
router.get("/my_blogs",verifyToken, getBlogs)
router.put("/:blogID",verifyToken, editBlogs)
router.patch("/:blogID",verifyToken, editBlogs)
router.delete("/:blogIDs",verifyToken,deleteBlog)
router.get("/:type", verifyToken, getBlogByType)

module.exports = router