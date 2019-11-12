import React, { useState, useEffect, Suspense } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import dayjs from 'dayjs'


// Exports: Experiment.js
const ExperimentBreadcrumb = ({courseId, courseName, experimentName, startDate, endDate, order}) => {
  
  const renderDate = date => (dayjs(date).format("MMM. DD"))
  
  return (
    <Breadcrumb>
      <Breadcrumb.Item >
          <Link to={"/courses"}>Courses</Link> 
      </Breadcrumb.Item>

      <Breadcrumb.Item > 
          <Link to={`/courses/${courseId}`}>{courseName}</Link> 
      </Breadcrumb.Item>
      

      <Breadcrumb.Item active>
        Experiment {order} ({renderDate(startDate)} - {renderDate(endDate)}): {experimentName}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default ExperimentBreadcrumb;
