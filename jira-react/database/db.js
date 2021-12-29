const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(res => {
        console.log("Database online")
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    dbConnection
}