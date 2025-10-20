import {useState} from 'react'
import Garage from './Garage.js'

function Car (props) {
    const [color,changeColor]=useState("blue")
    return (
        <div>
            <h1 style={{color:color}}> This car is a {color} {props.carinfo.model}.</h1>
            <Garage size='small'/>
        </div>
    )
}

export default Car