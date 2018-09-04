// IMPORTS
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const config = require('./config')
const app = require('express')()

// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('common'))
app.use(helmet())
app.use(compression())

// CONTROLLERS
const exampleController = require('./controllers/example')
app.use('/', exampleController)

// CREATE SERVER
const server = http.createServer(app)
server.listen(config.port, () => {
  console.log(`Listening on port ${ config.port }`)
})

module.exports = {
  app,
  server
}