import React from "react";
import { ExperimentsAPI, ChemicalsAPI, PictogramsAPI } from "../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import TheoreticalBackgroundCard from "./TheoreticalBackgroundCard";
import ChemicalsCard from "./ChemicalsCard"


const Experiment = props => {
  const _courseID = parseInt(props.match.params.id, 10);
  const _week = parseInt(props.match.params.week, 10);
  const _experiment = ExperimentsAPI.get(_courseID, _week);
  const _chemicals = ChemicalsAPI.filtered(_experiment.chemical_ids)
  const _pictogramMap = PictogramsAPI.pictogramMap(_chemicals)

  if (!_experiment) {
    return <div>Sorry, experiment not found.</div>;
  }

  return (
    <Container className="p-3">
      <h3> Week {_experiment.week}: {_experiment.name} </h3>
      <Accordion>
        <ChemicalsCard chemicals = { _chemicals } _pictogramMap = { _pictogramMap } />
        <TheoreticalBackgroundCard />
      </Accordion>
      <Link to="/">Back</Link>
    </Container>
  );
};

export default Experiment;