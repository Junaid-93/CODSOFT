const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const user = require('../models/userModel')

const register = async (req, res) => {
    const {username, email, password } = req.body
        console.log("Data taken")
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Fill all required details.' })
    }
    try {
        // Find if user already exist
        const userExist = await user.findOne({ email })
        if (userExist) {
            res.status(400).json({
                success: false,
                message: 'User with similar email already exists',
            })
        }
        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        // create user
        const User = await user.create({
            username,
            email,
            password: hashedPassword,
        })
        res.status(201).json({ success: true, message: 'Successfully Created' })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Server Error ${error.message}`,
        })
    }
}

const login =  async (req,res) => {
    const {email , password} = req.body

    try{

    if (email == "" , password == "") {
        return res
            .status(400)
            .json({ message: 'Please, enter login credentials' })
    }
    const User = await user.findOne({ email })
        if (!User) {
            return res
                .status(404)
                .send({ message: 'User with this email not found' })
        }
        const isMatch = await bcrypt.compare(password, User.password)
        if (isMatch) {
            const token = await generateToken(User._id)
            // res.cookie(token)
            const { username, email } = User
            // console.log(name, username)
            res.status(200).json({
                username,
                email,
                message: 'you are authentic user',
                token,
            })
        } else {
            res.status(400).json({ message: 'Invalid Credentials' })
        }
    } catch (error) {
        res.status(500).json({ message: `Server Error ${error.message}` })
    }    
}

const generateToken = async (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 86400 })
    }

    module.exports = {register, login}