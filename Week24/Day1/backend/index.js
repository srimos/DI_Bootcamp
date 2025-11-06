const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('../frontend/frontend/build/'))

app.get('/api/students',(req,res)=>{
    res.json([
        {name:'Abraham'},
        {name:'Shaun'},
        {name:'Nayar'}
    ])
})

app.listen(5001,()=>{
    console.log('server is listening on port 5001')
})