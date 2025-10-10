const knex = require('knex')({
    client:'pg',
    connection:{
        host: 'ep-ancient-truth-a1zkheio.ap-southeast-1.aws.neon.tech',
        user: "public_owner",
        password: 'npg_pMNenJu0R4gk',
        database: 'public',
        port:5432,
        ssl: { 
            rejectUnauthorized: true 
        }
    }
})

const express = require('express')
const app = express()

app.use(express.json())

app.get("/api/customers",function(request,response){
    knex.select('id','first_name','last_name').from('customers')
    .then(data=>{response.json(data)})
})

app.get("/api/customers/:id",function(request,response){
    const id = request.params.id
    knex('customers')
    .where({id:id})
    .then(customers =>
            response.json(customers)
    )
})

app.post("/api/customers",function(request,response){
    knex('customers')
    .returning([
        // "id",
        "first_name","last_name" 
    ])
    .insert({
        // id:request.body.id,
        first_name:request.body.first_name, 
        last_name:request.body.last_name
    })
    .then(data=>{response.json(data)})
    console.log("created")
})

app.put("/api/customers/:id",function(request,response){
    const id = request.params.id
    knex('customers')
    .where({
        id:id
    })
    .returning('*')
    .update(
        request.body
    )
    .then(customers =>
            response.json(customers)
    )
    console.log("updated")
})

app.delete("/api/customers/:id",function(request,response){
    const id = request.params.id
    knex('customers')
    .where({id:id})
    .del()
    .then(customers =>
            response.json(customers)
    )
    console.log("deleted")
})

app.listen(5002,function(){
    console.log("server is running")
})
