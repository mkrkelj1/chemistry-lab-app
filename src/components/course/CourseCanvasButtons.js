import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

/*
const sections = [1, 2, 3, 4, 5, 6]

const cols = sections.map(section => (
  <Col xs={4} md={2}><Button variant = "primary"  >Section {section}</Button></Col>
));
*/

/*testing hours...
since students may not know their section number...
Ideally I think it should say "Section 1" and on hover reveal the time of the section*/
const sections = ["10:00-10:50", "11:00-11:50", "12:00-12:50", "01:00-01:50", "02:00-02:50", "03:00-03:50"]
const cols = sections.map(section => (
  <Button variant = "primary"  >{section}</Button>
));


const CourseCanvasButtons = () => {
  return (
      <div className="p-1">
        <strong>Canvas Pages</strong>
        <Row className="max-width">
            {cols}
        </Row>
      </div>
  );
};

export default CourseCanvasButtons;