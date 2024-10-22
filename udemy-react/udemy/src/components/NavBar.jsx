import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h1>MY APP</h1>
            <Link to="/">HOME</Link>
            <Link to="/about"> ABOUT</Link>
        </nav>
    );
}

export default NavBar;
