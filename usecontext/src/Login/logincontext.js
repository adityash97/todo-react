import { createContext } from "react";
import { useState } from "react";

export const loginContext = createContext(null); //To be used inside component useContext(loginContext)

export const LoginState = (props) => {
  const [userName, setUserName] = useState("");
  const [isLogin, setLogin] = useState(false);
  return (
    <loginContext.Provider value={{ userName, setUserName, isLogin, setLogin }}>
      {props.children}
    </loginContext.Provider>
  );
};
