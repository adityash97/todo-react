import TodoAdd from "./TodoAdd";
import TodoDelete from "./TodoDelete";
import { useState } from "react";
function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000);
  const uniqueId = `${timestamp}${random}`;
  return uniqueId;
}

export default function TodoHome() {
  // hooks must be called inside a function.
  const [todo, setTodo] = useState([
    {
      id: generateUniqueId(),
      title: "Demo Todo",
    }
  ]);
  return (
    <>
      <h2>Amazing Todo!!</h2>
      {/* unidirectional data flow in react */}
      <TodoAdd updateTodo={setTodo} generateUniqueId={generateUniqueId} />

      {/* TODO data will be displayed here */}
      {todo.length !== 0 ? todo.map((data) => (
        <li key={data.id}>
          {data.id} :{data.title}
          <TodoDelete itemid={data.id} updateTodo={setTodo} />
        </li>
      )) : <h2>Todo list is empty</h2>}
    </>
  );
}
