import React,{useState,useEffect} from 'react';

function StudentList(){
    const [students,setStudents]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5001/api/students")
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            setStudents(data)
        })
    },[])

    return (
        <>
            <h2>I have the following students</h2>
            {
                students.map(student=>{
                    return <h3>{student.name}</h3>
                })
            }
        </>
    )
}

export default StudentList
             
