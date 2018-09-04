const exampleRouter = require('express').Router()

exampleRouter.get('/', (req, res) => {
  res.status(200).send('OK')
})

module.exports = exampleRouter