import React from "react";
import { CoursesAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import CourseExperimentSchedule from "./CourseExperimentSchedule";
import CourseNotebooksReports from "./CourseNotebooksReports";
import CourseLabRegulations from "./CourseLabRegulations";


const Course = props => {
  // Parse number/week/id from pathname.
  const course = CoursesAPI.get(parseInt(props.match.params.id, 10));

  if (!course) {
    return <div>Sorry, course not found.</div>;
  }

  const _courseId = course.id;

  return (
    <Container className="p-3">
      <h3> {course.name} </h3>
      <h5> Instructor: {course.instructor} </h5>
      <p> Welcome to {course.name}! </p>
      <Accordion>
        <CourseExperimentSchedule courseId = { _courseId } />
        <CourseNotebooksReports courseId = { _courseId } />
        <CourseLabRegulations courseId = {_courseId } />
      </Accordion>
      <br />
      {/* <Link to={`${_courseID}/experiments`}>Experiments</Link> */}
    </Container>
  );
};

export default Course;







