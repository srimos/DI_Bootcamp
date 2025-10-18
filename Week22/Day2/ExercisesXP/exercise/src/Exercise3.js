import React from 'react'
import './Exercise.css'

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends React.Component {
    render() {   
        return (
            <div>
                <h1 
                // style={{color:"red",backgroundColor:"lightblue"}}
                style = {style_header} 
                >This is a h1 tag</h1> 
                <p className="para">This is a paragraph</p>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">This is a link</a>
                <p></p>
                <form><label>This is a form<input type="text" /></label><button type="submit">Submit</button></form>
                <br/>
                <img src="https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png" alt="Example" width="200px" />
                <br/>
                <div>
                    <ul>
                        <li>This is an item in a list</li>
                        <li>This is an item in a list</li>
                    </ul>
                </div>
            </div>
        )
    }
}      

export default Exercise;