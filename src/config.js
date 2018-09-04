const swaggerDoc = require('../swagger.json')

const isProduction = process.env.NODE_ENV === 'production'
if (!isProduction) {
  require('dotenv').config()
} else {
  swaggerDoc.host = 'https://cd-pipeline-skeleton.herokuapp.com'
}

let port = process.env.PORT

if (process.env.NODE_ENV === 'test') {
  port = process.env.TEST_PORT
}

module.exports = {
  port,
  swaggerDoc
}
