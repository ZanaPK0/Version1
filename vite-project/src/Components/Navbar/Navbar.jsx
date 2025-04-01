import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = ({
    pageoneName
}) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log({counter});
    }, [counter])

    return (
        <nav className="flex flex-row">

            <NavLink to ="/" className ="m-2 p-2">
            Home
            </NavLink>

            <NavLink to ="/PageOne" className="m-2 p-2" onClick={() => setCounter(counter+1)}>
            {pageoneName} {counter}
            </NavLink>

            <NavLink to ="/PageTwo" className="m-2 p-2">
            PageTwo
            </NavLink>

        </nav>
    );
};

export default Navbar;