const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const Firebase = require('./Firebase/config')
const todoRouter = require('./Routers/todos_router')

Firebase.initializeDB()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/todo', todoRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
