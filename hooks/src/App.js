import React, { useState } from "react";

function App() {
  // states & hooks
  const [count, setCount] = useState(0);

  // utility functions
  const addCount = () => {
    setCount((prevCount) =>prevCount + 1);
  };
  const subCount = () => {
    setCount((prev) => prev > 0 ? prev - 1 : prev);
  };

  
  return (
    <>
      <div className=" container-fluid d-flex justify-content-arround justify-content-center align-items-center">
        <button className="btn btn-primary" onClick={addCount}>
          +
        </button>
        <h3>count : {count}</h3>
        <button className="btn btn-warning" onClick={subCount}>
          -
        </button>
      </div>
    </>
  );
}

export default App;
