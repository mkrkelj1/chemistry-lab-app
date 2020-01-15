import React from "react";
import { ExperimentsAPI } from "../../api";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import Alert from "react-bootstrap/Alert";
dayjs.extend(isBetween);
// Exports: Course.js

const getDateDiffs = (startDate) => {
    const date1 = dayjs()
    const date2 = dayjs(startDate)
    const diff = date2.diff(date1, 'day')
    return diff
};

const getCurrent = (startDate, endDate) => {
  const _today = dayjs();
  const _start = dayjs(startDate);
  const _end = dayjs(endDate);
  return _today.isBetween(_start, _end);
};

const CurrentlyHappening = ({ order, courseId, currentExperiment }) => {
  return (
    <Alert className="call-out">
      <em className="call-out-em"> currently happening:</em>
      <br />
      <div className="call-out-experiment">Experiment #{order}</div>
      <br />
      <NavLink
        className="call-out-link"
        to={`${courseId}/experiments/${currentExperiment.experimentID}`}
      >
        {currentExperiment.name}
      </NavLink>
    </Alert>
  );
};

const HappeningNext = ({ order, courseId, nearestExperiment }) => {
  return (
    <Alert className="call-out">
      <em className="call-out-em">
        <strong>No current experiment!</strong>
      </em>
      <br />
      <div className="call-out-experiment">Next experiment:</div>
      <br />
      <NavLink
        className="call-out-link"
        to={`${courseId}/experiments/${nearestExperiment.experimentID}`}
      >
        {nearestExperiment.name}
      </NavLink>
    </Alert>
  );
};

const CourseCurrent = ({ courseId }) => {
  const experiments = ExperimentsAPI.filtered(courseId);
  const between = experiments.map(e => getCurrent(e.startDate, e.endDate));
  const betweenIndex = between.indexOf(true);
  
  // If today's date doesn't fall within a lab week.
  if (betweenIndex == -1) {
    const dateDiffs = experiments.map(e => getDateDiffs(e.startDate)); // Array of date diffs

    // Check if all experiments have passed.
    const allDatesPassed = dateDiffs.every(diff => diff < 0)
    
    if (allDatesPassed == true){
      return <Alert className = "call-out" ><strong>No upcoming experiments</strong></Alert>
    }

    const postiveDiffs = dateDiffs.filter(function(x) {return x > -1;}); // Filter negatives
    const minDiff = Math.min.apply(null, postiveDiffs); // Get smallest diff
    const minIndex = dateDiffs.indexOf(minDiff); // Index of smallest diff
    const nearestExperiment = experiments[minIndex]; // Nearest experiment

    return (
      <HappeningNext
        order={nearestExperiment.order}
        courseId={courseId}
        nearestExperiment={nearestExperiment}
      />
    );
  }


  const currentExperiment = experiments[betweenIndex];
  const order = currentExperiment.order;

  return (
    <div className="p-1">
      <CurrentlyHappening order = {order} courseId = {courseId} currentExperiment = {currentExperiment} />
    </div>
  );
};

export default CourseCurrent;