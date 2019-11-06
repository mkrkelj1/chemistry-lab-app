import React from "react";
import { ExperimentsAPI } from "../../api";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

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

  return (
    <div className="p-1">
      <em> Currently happening:</em>
      <br />
      <strong>
        <Link to={`${courseId}/experiments/${currentExperiment.experimentID}`}>
          {currentExperiment.name}
        </Link>
      </strong>
    </div>
  );
};

export default CourseCurrent;