import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const sections = [1, 2, 3, 4, 5, 6]

const cols = sections.map(section => (
  <Col xs={4} md={2}><Button variant = "primary"  >Section {section}</Button></Col>
));

const CourseCanvasButtons = () => {
  return (
      <div className="p-1">
        <strong>Canvas Pages</strong>
        <Row>
            {cols}
        </Row>
      </div>
  );
};

export default CourseCanvasButtons;

