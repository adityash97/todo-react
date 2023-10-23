import { useState } from "react"
export default function TodoAdd(){
    const [input,setInput] = useState()

    const itemHandler = (event) => {
        event.preventDefault()
    }

    return (
      <>
        {/* A page will get reloded when even a form is submitted(use preventdefault) */}
        <form>
          <input value={input} />
          <button onClick={itemHandler}>Add Items</button>
        </form>
      </>
    );
}