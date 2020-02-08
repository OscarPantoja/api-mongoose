
const mongoose = require('mongoose')

const DB_PASSWORD = '1108'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://oscar:${DB_PASSWORD}@sexta-gen-jfbyg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
