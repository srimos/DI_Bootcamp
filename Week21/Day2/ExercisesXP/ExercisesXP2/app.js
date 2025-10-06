const express = require('express')
const app = express()
const router = require('./routes/todo.js');

app.listen(5001, () => {
    console.log('server is listening on port 5001')
})

app.use(express.json())
app.use('/todos', router);