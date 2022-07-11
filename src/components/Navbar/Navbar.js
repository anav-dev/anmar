import React from "react";
import { Link } from "react-router-dom";
import Navbarstyle from "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Library logo
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/library" className="nav-links">
              Library
            </Link>{" "}
          </li>
          <li className="nav-item">
            <Link to="/list" className="nav-links">
              favBooks
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
