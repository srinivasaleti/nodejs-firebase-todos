var express = require('express')
var todoRouter = express.Router()

const todoList = []
// define the home page route
todoRouter.get('/', function(req, res) {
  res.json(todoList);
})

todoRouter.post("/", function(req, res) {
  const todo = {
    text: req.body.text,
    created_at: Date.now(),
    updated_at: Date.now(),
    completed: false
  }
  todoList.push(todo)
  res.json(todoList)
})

module.exports = todoRouter