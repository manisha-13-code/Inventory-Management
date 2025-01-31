const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(()=> {
        console.log("Connected to database")
    }).catch((err)=> {
        console.log('An error occurred: ', err)
    })
}

module.exports = connectToDb;