import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
