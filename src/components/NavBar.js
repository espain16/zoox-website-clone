import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/autonomy">Autonomy</Link>
          </li>
          <li>
            <Link to="/">Zoox</Link>
          </li>
          <li>
            <Link to="">Careers</Link>
          </li>
          <li>
            <Link to="">Menu</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
