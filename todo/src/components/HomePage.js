import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import EditModal from "./EditModal";

export default function Home() {
  const [todos, setTodos] = useState([
    { title: "Sample Todo", id: Math.floor(Math.random() * 89999 + 10000) },
  ]);
  const [todoTitle, setTodoTitle] = useState("");
  const [editModal, setEditModal] = useState(false)

  const opneModal = () => {
    setEditModal(true);
  };

  const closeModal = () => {
    setEditModal(false);
  };

  function createTodo(event) {
    event.preventDefault();
    setTodos((prevTodo) => {
      // debugger
      return [
        ...prevTodo,
        {
          title: todoTitle,
          id: Math.floor(Math.random() * 89999 + 10000),
        },
      ];
    });
  }


  function onDelete(id) {
    setTodos(
      (prevTodo) => {
        return prevTodo.filter((todo) => todo.id !== id)
      }

    )
  }

  function onUpdate(id, title) {
    setTodoTitle(
      (prevTodo) => {
        for (let todo in prevTodo) {
          if (parseInt(todo.id) === parseInt(id)) {
            todo.title = title
            return prevTodo
          }
        }
      }
    )
  }

  return (
    <div className="flex" style={{ height: '100vh', width: '100vw' }}>
      {editModal ? (
        <EditModal closeModal={closeModal} updateTodo={onUpdate} />
      ) : (
        ""
      )}

      <div className="grid">
        <div align='center'>
          <h3 className="heading">Amazing Todo!!</h3>
          <form onSubmit={(event) => createTodo(event)}>
            <input
              placeholder="Add todo items here"
              className="formInput"
              defaultValue={todoTitle}
              onInput={(e) => setTodoTitle(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Add
            </button>
          </form>
          <div align='center' className="view" style={{display: todos.length !== 0 ? "block": "none"}}>
            {todos.map((item) => (
              <div className="flex">
                <div style={{ wordBreak: 'break-word', marginRight: '1rem' }}>
                  {item.title} - {item.id}
                </div>
                <div className="flex" style={{ width: '4rem' }}>
                  <button onClick={() => onDelete(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button onClick={opneModal}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
