import React from "react";
import { CoursesAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CourseHeading from "./CourseHeading"
import CourseCurrent from "./CourseCurrent"
import CourseCanvasButtons from "./CourseCanvasButtons"
import CourseExperimentSchedule from "./CourseExperimentSchedule";
import CourseNotebooksReports from "./CourseNotebooksReports";
import CourseLabRegulations from "./CourseLabRegulations";


// Exports: Routes.js
const Course = props => {
  const _course = CoursesAPI.get(parseInt(props.match.params.id, 10));

  if (!_course) {
    return <div>Sorry, course not found.</div>;
  }

  const _courseId = _course.id;
  
  return (
    <Container className="p-1">
      <CourseHeading course = { _course } />
      <CourseCurrent courseId = { _courseId } />
      <CourseCanvasButtons />
      <div className="p-1"></div>
      <CourseExperimentSchedule courseId = { _courseId } />
      <CourseNotebooksReports courseId = { _courseId } location = {"notebook"} />
      <CourseLabRegulations courseId = { _courseId } location = {"regulations"} />

      <br />
      {/* <Link to={`${_courseID}/experiments`}>Experiments</Link> */}
    </Container>
  );
};

export default Course;
