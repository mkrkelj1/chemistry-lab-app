import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faAtom, faHandPaper, faVideo} from "@fortawesome/free-solid-svg-icons";
// Exports to Header.js

const home = <FontAwesomeIcon icon={faHome} />;
const atom = <FontAwesomeIcon icon={faAtom} />;
const hand = <FontAwesomeIcon icon={faHandPaper} />;
const video = <FontAwesomeIcon icon={faVideo} />;

const navArr = [
  { route: "/", location: "Home", icon: home },
  { route: "/courses", location: "Courses", icon: atom },
  { route: "/videos", location: "Videos", icon: hand },
  { route: "/safety", location: "Safety", icon: video }
];

const navs = navArr.map(item => (
  <LinkContainer to={item.route}>
    <Nav.Link href="#">
      <a href="#">
        <div className="icon-div">{item.icon}</div>
        {item.location}
      </a>
    </Nav.Link>
  </LinkContainer>
));

const NavigationBar = () => (
  <Navbar className="justify-content-between">
    <Navbar.Brand>Organic Chemistry at Barnard</Navbar.Brand>
    <Nav>{navs}</Nav>
  </Navbar>
);

export default NavigationBar;
