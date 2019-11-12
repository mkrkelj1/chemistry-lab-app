import React from "react";
import { ExperimentsAPI } from "../../api";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import Alert from "react-bootstrap/Alert";
dayjs.extend(isBetween);
// Exports: Course.js


const getCurrent = (startDate, endDate) => {
  const _today = dayjs();
  const _start = dayjs(startDate);
  const _end = dayjs(endDate);
  return _today.isBetween(_start, _end);
};


const CourseCurrent = ({ courseId }) => {
  const experiments = ExperimentsAPI.filtered(courseId);
  const between = experiments.map(e => getCurrent(e.startDate, e.endDate));
  const betweenIndex = between.indexOf(true);
  const currentExperiment = experiments[betweenIndex];
  const order = currentExperiment.order;

  return (
    <div className="p-1">
      <Alert className = "call-out" >
        <em className = "call-out-em"> currently happening:</em>
        <br />
        <div className = "call-out-experiment">Experiment #{order}</div>
        <br />      
        <NavLink 
          className = "call-out-link" 
          to = {`${courseId}/experiments/${currentExperiment.experimentID}`}
        > 
          {currentExperiment.name}
        </NavLink>
      </Alert>
    </div>
  );
};

export default CourseCurrent;