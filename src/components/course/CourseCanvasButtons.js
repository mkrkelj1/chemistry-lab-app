import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Sections = {
  1: [
    { section: 1, url: "https://courseworks2.columbia.edu/courses/96043" },
    { section: 2, url: "https://courseworks2.columbia.edu/courses/96047" },
    { section: 3, url: "https://courseworks2.columbia.edu/courses/96050" },
    { section: 4, url: "https://courseworks2.columbia.edu/courses/96054" },
    { section: 5, url: "https://courseworks2.columbia.edu/courses/96058" },
    { section: 6, url: "https://courseworks2.columbia.edu/courses/97008" }
  ],
  2: [
    { section: 1, url: "https://courseworks2.columbia.edu/courses/105165" },
    { section: 2, url: "https://courseworks2.columbia.edu/courses/105168" },
  ]
}


const Section = (props) => props.sections.map(section => (
  <Col xs={4} md={2}>
    <Button variant="primary" href={section.url}>
      Section {section.section}
    </Button>
  </Col>
));

const CourseCanvasButtons = (props) => {
  const courseId = props.courseId
  const section = Sections[courseId]

  return (
    <div className="p-1">
      <strong>Canvas Pages</strong>
      <Row className="max-width">
        <Section sections = {section} />
      </Row>
    </div>
  );
};

export default CourseCanvasButtons;
