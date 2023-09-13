const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter.js')
const blogRouter = require('./routes/blogRouter.js')
const cors = require('cors')
const dotenv = require('dotenv')

// const {register,login} = require('./controllers/user')


dotenv.config()


const ConnectDB = require('./config/dbConnection')

ConnectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req,res) => {
    res.send("Salam")
})
// app.post("/login", login)
// app.post("/register", register)

app.use("/users",userRouter);
app.use("/blogs",blogRouter);

const port = process.env.PORT || 8001
app.listen(port , () => {
    console.log(`Server is listening at ${port}`); 
})

