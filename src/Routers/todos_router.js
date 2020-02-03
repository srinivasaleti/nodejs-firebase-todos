var express = require('express')
var todoRouter = express.Router()

// define the home page route
todoRouter.get('/', function (req, res) {
  res.send('Todos')
})

module.exports = todoRouter