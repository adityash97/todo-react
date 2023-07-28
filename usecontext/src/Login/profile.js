import { loginContext } from "./logincontext";
import { useContext } from "react";
export function Profile(props) {
  const isLogin = useContext(loginContext).isLogin;
  const userName = useContext(loginContext).userName;
  return (
    <>
      <h1>This is a login page</h1>
      logged in : {isLogin ? "Logged In" : "Not Logged in"}
      <br />
      User name : {userName}
    </>
  );
}
