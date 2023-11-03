import "./App.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
function App() {
  const location = useLocation().pathname;
  console.log("Path Name", location);
  return (
    <>
      <div className="container-fluid vh-100 overflow-auto bg-black">
        <nav className="navbar navbar-light ">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 text-white">
              Github Finder
            </span>
            {location !== "/" && (
              <Link to="/" className="text-white text-bold">
                Home
              </Link>
            )}
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
