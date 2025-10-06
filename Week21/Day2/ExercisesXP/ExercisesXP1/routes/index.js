const express = require('express')
const indexRouter = express.Router()

indexRouter.get('/', function(req,res){
    res.send("<h1>This is the home page</h1>")
})

indexRouter.get('/about', function(req,res){
    res.send("<h1>This is the about page</h1>")
})

module.exports = indexRouter