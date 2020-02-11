
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

router.post('/', async (request, response) => {
  try {
    const newKoder = await koder.create(request.body)
    response.json({
      success: true,
      message: 'Koder created',
      data: {
        koder: newKoder
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

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const koderfound = await koder.getById(id)

    response.json({
      success: true,
      message: 'koder found',
      data: {
        koder: koderfound
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

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const kodertodelete = await koder.deleteById(id)

    response.json({
      success: true,
      message: 'koder deleted'
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const kodertoupdate = await koder.updateById(id, request.body)

    response.json({
      success: true,
      message: 'koder update',
      data: {
        koder: kodertoupdate
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

module.exports = router
