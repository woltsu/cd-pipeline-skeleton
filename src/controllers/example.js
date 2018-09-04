const exampleRouter = require('express').Router()

exampleRouter.get('/', (req, res) => {
  res.status(200).send('Hello world!')
})

module.exports = exampleRouter