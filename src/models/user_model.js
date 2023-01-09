const mongoose = require('mongoose')
const address_schema = require('./address_model')
const Schema = mongoose.Schema


const user_schema = new Schema({
    full_name: {
        type: String,
        required: true,
        default: 'not-available'
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String, 
        required: true,
    },
    age: {
        type: Number,
    },
    address: address_schema
}, {timestamps: true})

const user_model = mongoose.model('Users', user_schema)
module.exports = user_model