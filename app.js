const express = require('express')
const app = express()
const mainRouter = require('./routes/main')
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/', mainRouter)
const port = 5000

const start = async () => {
    try {
        app.listen(port, console.log(`server is connected to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}


start()