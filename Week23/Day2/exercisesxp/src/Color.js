import React from 'react'

class Color extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            favoriteColor:  "red"
        }
    }

    shouldComponentUpdate = () => {
        return false
    }

    changeColor = () => {
        this.setState({favoriteColor:"blue"})
    }

    render() {
        return (
            <>
            <h1 style={{ color: this.state.favoriteColor }}>My Favorite Color is {this.state.favoriteColor}.</h1>
            <button onClick={this.changeColor}>Change Color</button>
            </>
        )
    }
}

export default Color