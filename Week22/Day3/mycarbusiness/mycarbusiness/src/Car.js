import React from 'react'

class Car extends React.Component {
    constructor(props) { // runs when the object is created
        super(props) // call the constructor from React.Component
        this.state = {
            speed : 0,
            fuel: 45
        }
    }

    accelerate = () => {
        this.setState({ speed : this.state.speed + 10 })
    }

    decelerate = () => {
        this.setState({ speed : this.state.speed - 10 })
    }

    render() {
        return (
            <div>
                <h1>Hi, I am just a car of make {this.props.make} and model {this.props.model}</h1>
                <h2>I am currently going at {this.state.speed} km/h. I have {this.state.fuel} left</h2>
                Speed <progress value={this.state.speed} max="110"> {this.state.speed} km/h </progress>
                <button onClick={this.accelerate}>Accelerate</button><button onClick={this.decelerate}>Decelerate</button>
            </div>
        )
    }
}

export default Car