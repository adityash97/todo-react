import TodoAdd from "./TodoAdd";
import TodoDelete from "./TodoDelete";
import TodoEdit from "./TodoEdit";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
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
    },
  ]);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column  vh-100 ">
        <h2>Amazing Todo!!</h2>
        {/* unidirectional data flow in react */}
        <TodoAdd updateTodo={setTodo} generateUniqueId={generateUniqueId} />

        {/* TODO data will be displayed here */}
        {todo.length !== 0 ? (
          todo.map((data) => (
            <Row className="flex-row">
              <li key={data.id}>
                <Col>
                  {data.id} :{data.title}
                </Col>
                <Col>
                  <TodoDelete itemid={data.id} updateTodo={setTodo} />
                  <TodoEdit
                    itemid={data.id}
                    itemtitle={data.title}
                    updateTodo={setTodo}
                  />
                </Col>
              </li>
            </Row>
          ))
        ) : (
          <h2>Todo list is empty</h2>
        )}
      </div>
    </>
  );
}
