import {ACTIONS} from './App.js'
export function Todo(props) {
  function toggleTodo(id) {
    props.todoHandler({ type: ACTIONS.TOGGLE ,payload:{id:id}});
  }

  function deleteTodo(id){
    props.todoHandler({ type: ACTIONS.DELETE, payload: { id: id } });
  }
    return (
    
    <>
      <ul className="d-flex flex-column">
        {props.todos.map((todo) => {
          return (
            <>
              <div className="row">
                <div className="col-2">
                  <li key={todo.id}>
                    <p className={todo.active ? "text-success" : "text-danger"}>
                      {todo.title}
                    </p>
                  </li>
                </div>
                <div className="col-2">
                  <button
                    type="button"
                    onClick={() => toggleTodo(todo.id)}
                    className="btn btn-warning btn-sm"
                  >
                    Toggle Active
                  </button>
                </div>
                <div className="col-2">
                  <button
                    type="button"
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
}
