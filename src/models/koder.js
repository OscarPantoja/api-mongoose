
const mongoose = require('mongoose')

const kodersSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true,
    toLowerCase: true
  },
  email: {
    type: String,
    minlength: 5,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
    toLowerCase: true,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'n']
  }
})

module.exports = mongoose.model('koders', kodersSchema)
