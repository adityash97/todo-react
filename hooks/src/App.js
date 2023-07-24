import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  // states
  const [postData, setpostData] = useState([]);
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ count: 4, color: "red" });
  const counter = state.count;
  const color = state.color;

  // hooks
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log("called");
        setpostData(data.data);
      })
      .catch((err) => err);
  }, []);

  // utility functions

  function decCountby2() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }
  function incCountBy2() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  const incCounetr = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  const decCounter = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  return (
    <>
      <button onClick={decCountby2}>-</button>
      {count}
      <button onClick={incCountBy2}>+</button>
      <br />
      <h6>Working with object in setState</h6>
      <button onClick={decCounter}>-</button>
      {counter} : {color}
      <button onClick={incCounetr}>+</button>
      <ul>
        {postData.map((item, i) => {
          return <li key={i}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </>
  );
}

export default App;

