import React from "react";
import { NavLink } from "react-router-dom";

// routing paths for /, /PageOne, /PageTwo.
const Navbar = () => {
  return (
    <nav className="flex flex-row">
      <NavLink to="/" className="m-2 p-2 dark:text-white">
        Home
      </NavLink>
      <NavLink to="/PageOne" className="m-2 p-2 dark:text-white">
        Sweden
      </NavLink>
      <NavLink to="/PageTwo" className="m-2 p-2 dark:text-white">
        Forecast
      </NavLink>
    </nav>
  );
};

export default Navbar;
