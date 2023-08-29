const mongoose = require('mongoose')

const blogs = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title is required"],
    },
    category:{
        type:String,
        required:[true,"Category is required"]
    },
    content:{
        type:String,
        required:[true, "Content is required"]
    }

})
module.exports = mongoose.model("blogs", blogs)