import React from 'react'

class Color extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            favoriteColor: "red",
            show: true
        }
    }

    shouldComponentUpdate = () => {
        return true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor:"yellow"})
        }, 5000);
    }

    componentDidUpdate() {
        console.log("after update");
    }

    changeColor = () => {
        this.setState({favoriteColor:"blue"})
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("in getSnapshotBeforeUpdate")
        return prevState.favoriteColor;
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

class Child extends React.Component {
    componentWillUnmount () {
        console.log("Child is about to unmount");
        alert("The Component named Header is about to be unmounted.")
    }
    
    render(){
        console.log("Child is rendering");
        return(
            <h1>Hello World!</h1>
        )
    }
}

class Parent extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            show: true
        }
    }

    delete = () => {
        this.setState({show:false})
    }

    render(){
        return(
            <>
            {this.state.show && <Child />}
            <button onClick={this.delete}>Delete Header</button>
            </>
        )
    }
}

export {Color,Parent}