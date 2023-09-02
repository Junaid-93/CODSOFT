const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter.js')
const blogRouter = require('./routes/blogRouter.js')
const cors = require('cors')


const ConnectDB = require('./config/dbConnection')

ConnectDB

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req,res) => {
    res.send("Salam")
})

app.use("/routes/userRouter",userRouter);
app.use("/routes/blogRouter",blogRouter);

const port = process.env.PORT || 8001
app.listen(port , () => {
    console.log(`Server is listening at ${port}`); 
})

