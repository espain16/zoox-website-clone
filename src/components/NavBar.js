import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar-container">
        <ul>
          <li>
            <Link to="/vehicle">Vehicle</Link>
          </li>
          <li>
            <Link to="/autonomy">Autonomy</Link>
          </li>
          <li>
            <Link to="/" className="company-logo">
              Zoox
            </Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
