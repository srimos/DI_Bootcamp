const express = require('express')
const app = express()

app.use(express.json())

const students = [
    {
        "id":1,
        "name":"Abraham"
    },
    {
        "id":2,
        "name":"Shaun"
    },
    {
        "id":3,
        "name":"Somebody else"
    }
]

app.get("/",(request,response)=>response.sendFile(__dirname + "/public/index.html"))

app.get("/api/students", function(request,response){
    console.log(request.query)
    if(request.query.filter){
        student = students.filter((student) => student.name.toLocaleLowerCase().includes(request.query.filter.toLocaleLowerCase()))
        response.json(student)
    }
    else{
        response.json(students)
    }
})

app.get("/api/students/:id", function (request,response){
    student = students.filter((student)=>student.id == request.params.id)
        response.json(student)
})

app.get("/api/teachers", function (request,response){
    response.json([
        {
            "name":"Nayar"
        }
    ])
})

app.post("api/addNewStudents",function(request,response){
    
})

app.get("/course/:course_number/section/:section_number", function (request,response){
    response.send("<h1>This is Express JS Class</h1><h2>This is course "+request.params.course_number+" and section " +request.params.section_number+ "</h2>")
})

app.listen(5002, ()=>{
    console.log('server is listening on port 5002')
})

