const app = require('./app.js')
const config = require('./src/util/config.js')
const dbConnection = require('./src/util/db.js')


dbConnection().then(data => {
    app.listen(config.PORT, (err) => {
        if(err) {
            console.log(`There is some error while starting server on port ${config.PORT}`)
        } else {
            console.log(`Server is running on port ${config.PORT}`)
        }
    })
}
).catch(err => {
    console.log("there is some error whle starting server and database")
})