
const db = require('./src/lib/db')

const server = require('./src/server')

db
  .then(() => {
    console.log('estamos conectados')
    console.log('aqui levanto el servicio')
    server.listen(8080, () => {
      console.log('Server runnig')
    })
  })
  .catch(error => {
    console.error('algo salio mal', error)
  })
