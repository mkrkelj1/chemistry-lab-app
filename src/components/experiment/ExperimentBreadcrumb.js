import React, { useState, useEffect, Suspense } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import dayjs from 'dayjs'

//Consolidate course and exp breadcrums into 1 --> 
//console.log(props)
//match -->
//params: {id: "1", experimentID: "2"}
//path: "/courses/:id/experiments/:experimentID"
//url: "/courses/1/experiments/2"
// location --> {pathname: "/courses/1/experiments/2"


// Exports: Experiment.js
const ExperimentBreadcrumb = ({experiment, course}) => {
  const renderDate = date => (dayjs(date).format("MMM. DD"))
  const start = renderDate(experiment.startDate)
  const end = renderDate(experiment.endDate)
  const order = experiment.order
  const name = experiment.name

  return (
    <Breadcrumb >
      <Breadcrumb.Item >
          <Link to={"/courses"}>Courses</Link> 
      </Breadcrumb.Item>

      <Breadcrumb.Item > 
          <Link to={`/courses/${course.id}`}>{course.name}</Link> 
      </Breadcrumb.Item>

      <Breadcrumb.Item active>
        Experiment {order} ({start} - {end}): {name}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default ExperimentBreadcrumb;
