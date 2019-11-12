import React from "react";
import { ExperimentsAPI } from "../../api";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import Alert from "react-bootstrap/Alert";
dayjs.extend(isBetween);

 //   <div class="bs-callout">
 //      <h4>Success Callout</h4>
 //         This is a success callout.
 //   </div>

// <Alert variant = "warning" style = {style}>
const style = {"border-left": "2px solid #038391"}

const getCurrent = (startDate, endDate) => {
  const _today = dayjs();
  const _start = dayjs(startDate);
  const _end = dayjs(endDate);
  return _today.isBetween(_start, _end);
};

// Exports: Course.js
const CourseCurrent = ({ courseId }) => {
  const experiments = ExperimentsAPI.filtered(courseId);
  const between = experiments.map(e => getCurrent(e.startDate, e.endDate));
  const betweenIndex = between.indexOf(true);
  const currentExperiment = experiments[betweenIndex];
  const order = currentExperiment.order;

  return (
    <div className="p-1">
      <em> currently happening:</em>
      <br />
      <strong>Experiment #{order}</strong>
      <br />      
      <Link to={`${courseId}/experiments/${currentExperiment.experimentID}`}>
        {currentExperiment.name}
      </Link>
    </div>
  );
};

export default CourseCurrent;