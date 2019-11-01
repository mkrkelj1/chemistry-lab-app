import React from "react";
import { ExperimentsAPI }  from '../../api'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


// Exports to Course.js
const CourseExperimentSchedule = ({ courseId }) => {

  const schedule = () => {
    return ExperimentsAPI.filtered(courseId).map(e => (
      <React.Fragment>
        <li key={e.experimentID}>
          Week {e.week}: &nbsp;
          <Link to={`${courseId}/experiments/${e.week}`}>{e.name}</Link>
        </li>
      </React.Fragment>
    ));
  };
  
  return (
    <Card >
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Experiment Schedule
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <ul>
            {schedule()}
          </ul>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default CourseExperimentSchedule;
