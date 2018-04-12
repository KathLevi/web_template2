import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="menu">
    <ul className="menuList text-right">
      <li className="menuListElement">
        <NavLink exact activeClassName="current" to="/">
          HOME
        </NavLink>
      </li>
      <li className="menuListElement">
        <NavLink exact activeClassName="current" to="/video">
          VIDEO
        </NavLink>
      </li>
      <li className="menuListElement">
          <NavLink exact activeClassName="current" to="/team">
            OUR TEAM
          </NavLink>
        </li>
        <li className="menuListElement">
        <NavLink exact activeClassName="current" to="/contact">
          CONTACT US
        </NavLink>
      </li>
      <li className="menuListElement">
        <NavLink exact activeClassName="current" to="/signin">
          SIGN IN
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
