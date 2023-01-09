const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve(__dirname + '/.env.' + process.env.NODE_ENV)
})

// console.log(path.resolve(__dirname + '/.env.' + process.env.NODE_ENV))

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3300,
    ENDPOINT: process.env.ENDPOINT,
    DB_URL : process.env.DB_URL
}

module.exports = config