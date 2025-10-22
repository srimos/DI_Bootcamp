import {useState,useEffect} from 'react'

function CarFunction2 () {
    const [make,setMake] = useState('BMW')
    const [model,setModel] = useState('')
    const [speed,setSpeed] = useState(0)
    const [fuelLevel,setFuelLevel] = useState(100)
    const [sunrise, setSunrise] = useState("00:00")
    const [city,setCity] = useState("")
    const [lat,setLat] = useState(0)
    const [lng,setLng] = useState(0)
    
    const accelerate = () => {
        setSpeed(speed+10)
        setFuelLevel(fuelLevel-speed)
    }

    const decelerate = () => {
        setSpeed(speed-10)
        setFuelLevel(fuelLevel-speed)
    }

    const stop = () => {
        setSpeed(0)
    }

    const refuel = () => {
        setFuelLevel(100)
    }

    useEffect(function(){
        fetch('https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+lng)
        .then(data => data.json())
        .then(data => {
            setSunrise(data.results.sunrise)
        })
    })

    const setParis =() => {
        setCity("Paris")
        setLat(48.864716)
        setLng(2.349014)
    }

    const setNewYork = () => {
        setCity("New York")
        setLat(40.730610)
        setLng(-73.935242)
    }

    return (
        <>
        <h1>This is a car of make {make} and model {model} driving at {speed} with fuel level of {fuelLevel}.</h1>
        <h2>I will reach {city} at sunrise at {sunrise} o'clock.</h2>
        <button onClick={accelerate}>Accelerate</button>
        <button onClick={decelerate}>Decelerate</button>
        <button onClick={stop}>Stop</button>
        <button onClick={refuel}>Refuel</button>
        <button onClick={setNewYork}>Set New York as destination</button>
        <button onClick={setParis}>Set Paris as destination</button>
        </>
    )
}

export default CarFunction2