import React from "react";
import { CoursesAPI } from "../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ExperimentSchedule from "./ExperimentSchedule";
import LabNotebooksAndReports from "./LabNotebooksAndReports";

import LabRegulations from "./LabRegulations";

const Course = props => {
  // Parse number/week/id from pathname.
  const course = CoursesAPI.get(parseInt(props.match.params.id, 10));
  if (!course) {
    return <div>Sorry, course not found.</div>;
  }
  const id_ = course.id;
  return (
    <Container className="p-3">
      <h3>{course.name} </h3>
      <h4>Instructor: {course.instructor}</h4>
      <p> Welcome to {course.name}! </p>
      <ExperimentSchedule />
      <LabNotebooksAndReports />
      <LabRegulations />
      <br />
      <Link to={`${id_}/experiments`}>Experiments</Link>
    </Container>
  );
};

export default Course;
