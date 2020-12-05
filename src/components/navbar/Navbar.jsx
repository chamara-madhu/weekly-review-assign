import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar sticky-top p-3 client-nav-bar">
      <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
        Weekly Reviews
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <span className="nav-link text-white">Role : Regional Manager</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
