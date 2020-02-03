const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

const todoRouter = require('./Routers/todos_router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/todo', todoRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
