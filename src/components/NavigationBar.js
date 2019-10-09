import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Exports to Header.js
const NavigationBar = () => (
  <Nav justify fill variant="tabs">
    <Nav.Item>
    	<Nav.Link>
    		<Link to='/'>Home</Link>
    	</Nav.Link>   
    </Nav.Item>

    <Nav.Item>
    	<Nav.Link>
    		<Link to='/courses'>Courses</Link>
    	</Nav.Link>
    </Nav.Item>

    <Nav.Item>
    	<Nav.Link>
    		<Link to='/'>Videos</Link>
    	</Nav.Link>   
    </Nav.Item>

    <Nav.Item>
    	<Nav.Link>
    		<Link to='/'>Safety</Link>
    	</Nav.Link>   
    </Nav.Item>
  </Nav>
);

export default NavigationBar