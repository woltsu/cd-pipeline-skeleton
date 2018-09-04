const exampleRouter = require('express').Router()

exampleRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world!' })
})

module.exports = exampleRouter