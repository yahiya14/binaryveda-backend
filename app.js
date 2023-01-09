const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./src/router/index.js')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000}))
app.use(bodyParser.json({limit: "200mb"}))
router(app)

module.exports = app