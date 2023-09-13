const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username: {
        type: String,
        required:[true, "Username is required"],
        unique: true
    },
    email:{
        type: String,
        trim:true,
        required:[true, "Email is required"],
        unique: true
    },
    password:{
        type: String,
        required:[true, "Password is required"],
        minLength: [8, "Password must be of 8 characters"],
        unique: true
    }
})
module.exports = mongoose.model("user", user)