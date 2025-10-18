import {useState} from 'react'

const CarFunction = (props) => {
    const [colour,changeColour] = useState(props.colour)
    const [speed,changeSpeed] = useState(props.speed)
    const [max_speed,changeMaxSpeed] = useState(props.max_speed)
    const min_speed=0

    const accelerate = () => {
        changeSpeed(speed+10)
    }

    const decelerate = () => {
        changeSpeed(speed-10)
    }

    return (
        <div style={{backgroundColor:colour}}>
            <h1>Hello, I am a car from function coloured {colour}.</h1>
            <h2>I am going at {speed} km/h</h2>
            Speed <progress value={speed} max={max_speed}> {speed} km/h </progress>
            <button onClick={accelerate}>Accelerate</button>
            <button onClick={decelerate}>Decelerate</button>
        </div>
    )
}

export default CarFunction