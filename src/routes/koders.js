
const express = require('express')

const koder = require('../useCases/koder')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const koders = await koder.getAll()
    response.json({
      success: true,
      message: 'all koders',
      data: {
        koders
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/', (request, response) => {
  try {
    response.json({
      estatus: 'ok',
      data: request.body
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
