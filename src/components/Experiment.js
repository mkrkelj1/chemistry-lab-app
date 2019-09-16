import React from "react";
import { ExperimentsAPI } from "../api";
import { Link } from "react-router-dom";
import Chemicals from "./Chemicals";
import TheoreticalBackground from "./TheoreticalBackground";

// Parse number/week/id from pathname.
const Experiment = props => {
  const _courseID = parseInt(props.match.params.id, 10);
  const _week = parseInt(props.match.params.week, 10);
  const experiment = ExperimentsAPI.get(_courseID, _week);

  if (!experiment) {
    return <div>Sorry, experiment not found.</div>;
  }

  return (
    <div>
      <h3>
        Week {experiment.week}: {experiment.name}{" "}
      </h3>
      <h4>Chemicals: {experiment.chemicals}</h4>

      <Chemicals />
      <TheoreticalBackground />
      <Link to="/">Back</Link>
    </div>
  );
};

export default Experiment;