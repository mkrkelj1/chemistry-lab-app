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

// const i = arr.map(thing => (stuff))
  const _courseId = course.id;
  const instructors = course.instructors
  const coordinators = course.coordinators
  const text_and_materials = course.text_and_materials
  const optional_texts = course.optional_texts


  return (
    <Container>
      <Container className="p-1">
        <h3> {course.name} </h3>

        <strong> Course Coordinators:</strong>
        <p>{ instructors } </p>

        <strong>Lab Instructors:</strong>
        <p>{ instructors }</p>
   
        <strong>Help Room:</strong>
        <p>Lorem ipsum lorem ipsum</p>
       
        <strong>Required Text and Materials:</strong>
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







