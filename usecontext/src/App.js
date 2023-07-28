import "./App.css";
import { Home } from "./Login/home";
import { LoginState } from "././Login/logincontext.js";

function App() {
  return (
    <>
      <LoginState>
        <Home />
      </LoginState>
    </>
  );
}

export default App;
