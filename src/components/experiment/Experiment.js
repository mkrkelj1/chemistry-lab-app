import React from "react";
import { CardsAPI, CoursesAPI, ExperimentsAPI, ChemicalsAPI, PictogramsAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ExperimentBreadcrumb from "./ExperimentBreadcrumb";
import ExperimentCards from "./ExperimentCards"


const Experiment = props => {
  const _cards = CardsAPI.all();
  const _courseId = parseInt(props.match.params.id, 10);
  const _course = CoursesAPI.get(_courseId)
  const _experimentId = parseInt(props.match.params.experimentID, 10);
  const _experiment = ExperimentsAPI.filtered(_courseId).find(exp => exp.experimentID == _experimentId)
  
  if (!_experiment) {
    return <div>Sorry, experiment not found.</div>;
  }

  return (
  <React.Fragment>
    <ExperimentBreadcrumb experiment = {_experiment} course = {_course} />
    <Container className="p-1">
      <h1> {_experiment.name} </h1>
    </Container>
    <ExperimentCards experiment = {_experiment} />
  </React.Fragment>
  );
};

export default Experiment;