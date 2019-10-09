import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


// Exports to Course.js
const CourseExperimentScheduleCard = () => {
  const schedule = () => {
    return (
      <React.Fragment>
        <li>09/13: Extracting .... </li>
        <li>09/20: Microscope testing ...</li>
        <li>09/27: Synthesizing stuff</li>
        <li>10/04: Ions and bonds ...</li>
      </React.Fragment>
    );
  };

  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Experiment Schedule
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <ul>{schedule()}</ul>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default CourseExperimentScheduleCard;
