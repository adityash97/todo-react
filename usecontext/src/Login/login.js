import { loginContext } from "./logincontext";
import { useContext } from "react";

export function Login(props) {
  const setUserName = useContext(loginContext).setUserName;
  const setLogin = useContext(loginContext).setLogin;
  const userName = useContext(loginContext).userName;
  function onSubmit(e) {
    e.preventDefault();
    setLogin((prev) => !prev);
  }
  return (
    <>
      This is login page
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={userName}
          placeholder="name here"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input placeholder="password here" />
        <button>Submit</button>
      </form>
    </>
  );
}
