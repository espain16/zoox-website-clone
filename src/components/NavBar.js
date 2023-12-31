import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/vehicle">Vehicles</Link>
          </li>
          <li>
            <Link to="/autonomy">Autonomy</Link>
          </li>
          <li>
            <Link to="/">Zoox</Link>
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
