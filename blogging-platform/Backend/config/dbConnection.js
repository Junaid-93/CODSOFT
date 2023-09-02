const mongoose = require('mongoose')

const DBconnection = () => {
mongoose.connect(process.env.MONGODB_URL), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
.then(console.log("Database is connected"))

.catch(console.log("Dabase connection failed"))
}

module.exports = DBconnection