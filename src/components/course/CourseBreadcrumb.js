import React, { useState, useEffect, Suspense } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import dayjs from 'dayjs'


// Exports: Course.js
const CourseBreadcrumb = ({course}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item >
          <Link to={"/courses"}>Courses</Link> 
      </Breadcrumb.Item>

      <Breadcrumb.Item active > 
          {course.name}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CourseBreadcrumb;