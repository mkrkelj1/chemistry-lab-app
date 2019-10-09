import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Exports to Header.js
const NavigationBar = () => (
  <Nav justify fill variant="tabs">
    <Nav.Item>
    	<Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>

    <Nav.Item>
    	<Nav.Link href="/courses">Courses</Nav.Link>
    </Nav.Item>

    <Nav.Item>
    	<Nav.Link href="/">Videos</Nav.Link>
	</Nav.Item>

    <Nav.Item>
    	<Nav.Link href="/">Safety</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default NavigationBar