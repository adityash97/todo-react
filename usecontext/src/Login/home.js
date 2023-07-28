import { Profile } from "./profile";
import { Login } from "./login";
import { loginContext } from "./logincontext";
import { useContext } from "react";

export function Home() {
  const isLogin = useContext(loginContext).isLogin;

  return <>{isLogin ? <Profile /> : <Login />}</>;
}
