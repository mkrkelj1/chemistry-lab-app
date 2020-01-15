import React from "react";
// Exports to: Course.js

const Coordinators = course => {
  const coordinators = course.course.coordinators;
  return coordinators.map(c => (
    <React.Fragment>
      <tr>
        <td>{c.name}</td>
        <td>
          <strong>&nbsp;&nbsp;Office:</strong> {c.office}
        </td>
        <td>
          <strong>&nbsp;&nbsp;Email:</strong>
          {c.email}
        </td>
      </tr>
    </React.Fragment>
  ));
};

const Instructors = course => {
  const instructors = course.course.instructors.join(", ");
  return instructors;
};

const HelpRoom = course => {
  const helpRoom = course.course.help_room;

  return helpRoom.map(room => (
    <React.Fragment>
      {room.location} | {room.hours}
    </React.Fragment>
  ));
};

const CourseHeading = ({ course }) => {
  return (
    <div className="p-1">
      <h1> {course.name} </h1>
      <br />
      <strong>Course Coordinators:</strong>
      <table>
        <Coordinators course={course} />
      </table>

      <br />
      <strong>Lab Instructors: </strong>
      <Instructors course={course} />

      <br />
      <strong>Help Room: </strong>
      <HelpRoom course={course} />
      <br />
      <br />
    </div>
  );
};

export default CourseHeading;
