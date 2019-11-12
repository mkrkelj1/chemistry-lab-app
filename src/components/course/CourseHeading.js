import React from "react";

// Exports: Course.js
const CourseHeading = ({ course }) => {
  return (
    <div className="p-1">
      <h1> {course.name} </h1>
      <p>Some text can go here to help with context</p>
    </div>
  );
};

export default CourseHeading;