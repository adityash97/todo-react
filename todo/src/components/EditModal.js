import React,{useState} from 'react'
export default function EditModal (props){
    const [newTitle,setNewTitle] = useState("")




    return ( 
        <>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    <input
                      defaultValue={newTitle}
                      onInput={(e) => setNewTitle(e.target.value)}
                    />
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={props.closeModal}
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={props.closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={props.updateTodo()}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      
    );







}