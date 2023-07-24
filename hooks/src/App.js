import React, { useState,useReducer } from "react";
import {Todo} from './Todo.js'


export const ACTIONS = {
  ADD:'add',
  TOGGLE:'toggle',
  DELETE:'delete'
}

function reducer (todos,action) {
    // debugger;
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(action.payload.title)];
    case ACTIONS.TOGGLE:
      return todos.map(todo => {
        if (todo.id === action.payload.id){
          return {...todo,active:!todo.active}
        }
        return todo
      })
    case ACTIONS.DELETE:
      return todos.filter(todo => {
        return todo.id !== action.payload.id
      });
    default:
      return todos;
  }

}

function newTodo(title){
  return { id: Date.now(), title: title , active:true};
}


function App() {
  // states & hooks
  const [todos,dispatch] = useReducer(reducer,[])
  const [title,setTitle] = useState('')

  // utility functions
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type:ACTIONS.ADD,payload:{title:title}})
    setTitle('')
    
  }

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Enter Title</p>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <Todo todos={todos} todoHandler={dispatch}/>
    </>
  );
}

export default App;
