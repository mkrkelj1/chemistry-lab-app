import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Exports to Header.js
const NavigationBar = () => (
    <Navbar expand = "lg" variant = "light" bg = "light" fixed = "bottom">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">      
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="courses">Courses</Nav.Link>
            </Nav>
          </Navbar.Collapse>
    </Navbar>
)

export default NavigationBar