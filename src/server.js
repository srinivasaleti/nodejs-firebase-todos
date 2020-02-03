const express = require('express')
const app = express()
const port = 3000
const todoRouter = require('./Routers/todos_router')

app.use('/todo', todoRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
