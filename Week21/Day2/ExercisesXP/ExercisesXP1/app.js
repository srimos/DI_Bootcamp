const express = require('express')
const app = express()
const indexRouter = require('./routes/index.js');

app.listen(5001, () => {
    console.log('server is listening on port 5001')
})

app.use(express.json())
app.use('/', indexRouter);
app.use('/about', indexRouter);
