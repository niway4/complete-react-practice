import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.main}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/allquotes">All Quotes</NavLink>
        </li>
        <li>
          <NavLink to="/quotedetail">Quote Detail</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
