import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


// Exports: Course.js
const CourseCanvasButtons = () => {
  return (
      <div className="p-1">
        <div><strong>Canvas Pages</strong></div>
        <Row>
          <Col xs={4} md={2}><Button variant="outline-info">Section 1</Button></Col>
          <Col xs={4} md={2}><Button variant="outline-info">Section 2</Button></Col>
          <Col xs={4} md={2}><Button variant="outline-info">Section 3</Button></Col>
          <Col xs={4} md={2}><Button variant="outline-info">Section 4</Button></Col>
          <Col xs={4} md={2}><Button variant="outline-info">Section 5</Button></Col>
          <Col xs={4} md={2}><Button variant="outline-info">Section 6</Button></Col>
        </Row>
      </div>
  );
};

export default CourseCanvasButtons;

