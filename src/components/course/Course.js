import React from "react";
import { CoursesAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import CourseExperimentSchedule from "./CourseExperimentSchedule";
import CourseNotebooksReports from "./CourseNotebooksReports";
import CourseLabRegulations from "./CourseLabRegulations";

// Exports: Routes.js
const Course = props => {
  const course = CoursesAPI.get(parseInt(props.match.params.id, 10));

  if (!course) {
    return <div>Sorry, course not found.</div>;
  }

  const _courseId = course.id;

  return (
    <Container>
      <Container className="p-1">
        <h3> {course.name} </h3>
        <h5> Instructor: {course.instructor} </h5>
        <p> Welcome to {course.name}! </p>
      </Container>

      <Container className="p-1">
        <CourseExperimentSchedule courseId={_courseId} />
      </Container>

      <Container className="p-1">
        <CourseNotebooksReports courseId={_courseId} />
      </Container>

      <Container className="p-1">
        <CourseLabRegulations courseId={_courseId} />
      </Container>

      <br />
      {/* <Link to={`${_courseID}/experiments`}>Experiments</Link> */}
    </Container>
  );
};

export default Course;







