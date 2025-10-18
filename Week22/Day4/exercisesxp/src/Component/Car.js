import {useState} from 'react'

function Car (props) {
    const [color,changeColor]=useState("blue")
    return (
        <div>
            <h1 style={{color:color}}> This car is a {color} {props.carinfo.model}.</h1>
        </div>
    )
}

export default Car