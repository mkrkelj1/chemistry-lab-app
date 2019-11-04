import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

// Exports to Header.js

const navObj = {
    "/": "Home",
    "/courses": "Courses",
    "/videos": "Videos",
    "/safety": "Safety"
};

const navs = Object.keys(navObj).map(nav => (
    <Nav.Item>
        <Nav.Link>
            <Link to={nav}> {navObj[nav]} </Link>
        </Nav.Link>
    </Nav.Item>
));

const NavigationBar = () => (
    <Nav justify fill variant="tabs">
        {navs}
    </Nav>
);

export default NavigationBar;