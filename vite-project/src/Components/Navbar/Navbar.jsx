import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex flex-row">

            <NavLink to ="/" className ="m-2 p-2">
            Home
            </NavLink>

            <NavLink to ="/PageOne" className="m-2 p-2">
            PageOne
            </NavLink>

            <NavLink to ="/PageTwo" className="m-2 p-2">
            PageTwo
            </NavLink>

        </nav>
    );
};

export default Navbar;