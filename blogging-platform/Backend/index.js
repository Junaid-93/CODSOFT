var express = require('express')
var app = express()
var ConnectDB = require('./config/dbConnection')

ConnectDB()

app.get('/', async (req,res) => {
    res.send("Salam")
})

const port = process.env.PORT || 8000
app.listen(port , (req,res) =>{
    console.log(`Server is listening at ${port}`); 
}
)
