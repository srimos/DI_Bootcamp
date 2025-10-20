import {useState} from 'react'

const clickMe = () => {
    alert("I was clicked")
}

const handleKeyDown = (event) => {
    if (event.key == "Enter")
        alert(`The ENTER key was pressed, your input is: ${event.target.value}`)
}

function Events () {
    const [isToggleOn,setIsToggleOn] = useState(true)

    const handleToggle = () => {
        setIsToggleOn(prev=>!prev)
    }

    return (
        <>
            <button onClick={clickMe}>Click Me!</button>
            <br/>
            <input onKeyDown={handleKeyDown} placeholder="Press the ENTER key!" id="input"></input>
            <br/>
            <button onClick={handleToggle}>{isToggleOn ? "ON" : "OFF"}</button>
        </>
    )
}

export default Events