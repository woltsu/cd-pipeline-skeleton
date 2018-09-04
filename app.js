const http = require('http')
const app = require('express')()

app.get('/', (req, res) => {
  res.status(200).send('Hello world!')
})

const PORT = process.env.PORT || 8080
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Listening on port ${ PORT }`)
})