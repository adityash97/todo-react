import TodoAdd from "./TodoAdd";
import { useState } from "react";

export default function TodoHome() {
  // hooks must be called inside a function.
  const [todo, setTodo] = useState([
    {
      id: 12,
      title: "Demo Todo",
    }
  ]);
  return (
    <>
      <h2>Amazing Todo!!</h2>
      <TodoAdd />

      {/* TODO data will be displayed here */}
      {todo.map((data) => (
        <li key={data.id}>
          {data.id}
          {data.title}
        </li>
      ))}
    </>
  );
}
