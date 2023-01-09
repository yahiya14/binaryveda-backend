const mongoose = require('mongoose')
const schema = mongoose.Schema

const address_schema = new schema({
    street: {
        type: String
    },
    city: {
        type: String
    }
})

module.exports = address_schema

