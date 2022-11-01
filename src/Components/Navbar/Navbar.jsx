import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav__container">
        <span>Adbook</span>
      </div>
      <div className="nav__items">
        <button className="nav__button">Register</button>
        <button className="nav__button">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
