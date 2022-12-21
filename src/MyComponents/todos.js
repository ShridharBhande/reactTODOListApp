import React from 'react';
import { TodoItem } from "../MyComponents/todoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  // console.log("----## insode todos-->", props.todos[0]);
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'> Todos List</h3>
      {
        props.todos.length === 0 ? "No Todo to display" :
          props.todos.map((eachTodo)=> {
            return (
              <TodoItem todo={eachTodo} key={eachTodo.sno} onDelete={props.onDelete} />     
            )
          })}
    </div>
  )
}

// export default todos
