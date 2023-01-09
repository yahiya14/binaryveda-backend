const mongoose = require('mongoose')
const config = require('./config')

const dbConnection = function() {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await mongoose.connect(config.DB_URL, {useUnifiedTopology: true})
            console.log("database connected")
            return resolve(data)
        } catch(err) {
            console.log(err)
            return reject(err)
        }
        // mongoose.connect(config.DB_URL, {useUnifiedTopology: true}).then(con => {
        //     console.log("------database connected-------")
        //     return resolve(true)
        // }).catch(error => {
        //     console.log("--------Error while connecting to Mongoose---------", error)
        //     return reject(false)
        // })
    })
}

module.exports = dbConnection


// mongoose.connect(config.DB_URL, {useUnifiedTopology: true}).then(con => {
//     console.log("------database connected-------")
// }).catch(error => {
//     console.log("--------Error while connecting to Mongoose---------", error)
// })