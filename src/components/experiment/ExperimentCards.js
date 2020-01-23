import React, { useState } from "react";
import { CardsAPI, CoursesAPI, ExperimentsAPI, ChemicalsAPI, PictogramsAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ExperimentCard from "./ExperimentCard";
import ExperimentChemicalsCard from "./ExperimentChemicalsCard";
import ExperimentVideosCard from "./ExperimentVideosCard";




// Exports: Experiment.js

const ExperimentCards = ({experiment}) => {
  const _cards = CardsAPI.all();
  const _chemicals = ChemicalsAPI.filtered(experiment.chemical_ids);
  const _pictogramMap = PictogramsAPI.pictogramMap(_chemicals);
  const _experimentId = experiment.experimentID

  if (!experiment) {
    return <div>Sorry, experiment not found.</div>;
  }

  const cards = _cards.map(card => (
    <Container className="p-1">
      <ExperimentCard card = {card} experiment = {experiment} />
    </Container>
  ));

  const ExpVideosCard = (
    <Container className="p-1">
      <ExperimentVideosCard  videoIds = {experiment.videoIds} />
    </Container>
  );

  const ExpChemCard = (
    <Container className="p-1">
      <ExperimentChemicalsCard  chemicals = {_chemicals} pictogramMap = {_pictogramMap} />
    </Container>
  );

  cards.splice(1, 0, ExpVideosCard); // Insert Videos card at 2 index 
  cards.splice(0, 0, ExpChemCard); // Insert Chemicals card at 0 index

  return (
  <React.Fragment>
      {cards}
  </React.Fragment>
  );
};

export default ExperimentCards;