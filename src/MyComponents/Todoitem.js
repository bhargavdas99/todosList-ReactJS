import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.sno}) {todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Done</button>
      <hr />
    </div>
  )
}
