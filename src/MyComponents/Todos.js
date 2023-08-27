import React from 'react'
import { Todoitem } from "./Todoitem"

export const Todos = (props) => {
    let myStyle ={
        color: props.mode==="dark"?'white':'black',
        minHeight: "70vh",
        margin:"2em auto",
        width:"55%"
      }
    return (
        <div className="container" style={myStyle}>
            <h3 >ToDos List</h3>
            {props.todos.length===0? "No todos to display":
            //below MAP FUNCTION is used as for loop to add Todos section as we click ADDTODO button in the addtodo component (V.V.I)
            props.todos.map((todo)=>{
                return(
                <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            })
            } 
            
        </div>
    )
}
