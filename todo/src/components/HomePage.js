import React, { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    { title: "Sample Todo", id: Math.floor(Math.random() * 89999 + 10000) },
  ]);
  const [todoTitle, setTodoTitle] = useState("");

  function createTodo(event) {
    event.preventDefault();
    setTodos((prevTodo) => {
      debugger
      return [
        ...prevTodo,
        {
          title: todoTitle,
          id: Math.floor(Math.random() * 89999 + 10000),
        },
      ];
    });
  }

  return (
    <>
      <div>
        Amazing Todo!!
        <form onSubmit={(event) => createTodo(event)}>
          <input
            placeholder="Add todo items here"
            defaultValue={todoTitle}
            onInput={(e) => setTodoTitle(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </form>
        <ul>
          {todos.map((item) => (
            <>
              <li>
                {item.title} - {item.id}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
