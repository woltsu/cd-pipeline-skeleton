const http = require('http')
const app = require('express')()
const { port } = require('../config')

const exampleRouter = require('./controllers/example')
app.use('/', exampleRouter)

const server = http.createServer(app)
server.listen(port, () => {
	console.log(`Listening on port ${ port }`)
})

module.exports = {
  app,
  server
}