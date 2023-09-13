const mongoose = require('mongoose')

const DBconnection = () => {
mongoose.connect(process.env.MONGODB_URL)
.then ( () => console.log("Database is connected"))
.catch( () => console.log("Dabase connection failed"))
}

module.exports = DBconnection