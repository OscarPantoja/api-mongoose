
const express = require('express')

const kodersRouter = require('./routes/koders')

const app = express()

app.use(express.json())

app.use('/koders', kodersRouter)

module.exports = app
