import React from 'react'
import ToDo from './ToDo.js'

const ToDoApp = () => {

    const addToDo = (e) => {
        e.preventDefault()




    return(
        <div id='root'>
            <div className="todo-app container">

                <h1 className="center blue-text">Todo's</h1>

                <div className="todos collection">
                    <div className="todo"><span>Buy some milk</span></div>
                    <div className="todo"><span>Do my homework</span></div>
                </div>

                <div>
                    <form>
                        <label>Add a new todo:</label>
                        <input type='text' value=''></input>
                    </form>    
                </div>    
            </div>  
        </div>      
    )
}

export default ToDoApp