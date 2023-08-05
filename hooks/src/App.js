import { useState } from "react";

function PQR() {
  const [counter, setCounter] = useState(0);
  const[name,setName]   = useState('aditya')



  function increase() {
    setCounter(
      
      function manipulateCounter(prevCounter) {
      // prevCounter = prevCounter + 1
      return (prevCounter += 1);
    }
    
    );

    setName(function manipulateName (prevName){
      return prevName + counter;
    })
  }

  function decrease() {
    setCounter(function manipulateCounter(prevCounter) {
      return (prevCounter -= 1);
    });

    setName(function manipulateName(prevName) {
      let newName = prevName + counter;
      return newName;
    });
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 flex-column
"
    >
      <h1 className={counter % 2 === 0 ? "text-danger" : "text-success"}>
        Sample React Project
      </h1>
      <div className="row ">
        {name}
        <div className="col">
          <button className="btn btn-success fw-bold" onClick={increase}>
            +
          </button>
        </div>
        <div className="col fw-bold">{counter}</div>
        <div className="col">
          <button className="btn btn-danger fw-bold" onClick={decrease}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default PQR;
