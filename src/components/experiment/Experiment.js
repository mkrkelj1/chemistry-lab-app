//import React from "react";
import React, { useState } from "react";
import { CardsAPI, ExperimentsAPI, ChemicalsAPI, PictogramsAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ExperimentCard from "./ExperimentCard"
import ExperimentChemicalsCard from "./ExperimentChemicalsCard"
import ExperimentProceduresCard from "./ExperimentProceduresCard"


const Experiment = props => {
  const [open, setOpen] = useState(false);
  const _cards = CardsAPI.all();
  const _courseID = parseInt(props.match.params.id, 10);
  const _experimentID = parseInt(props.match.params.experimentID, 10);
  const _experiment = ExperimentsAPI.get(_courseID, _experimentID);
  const _chemicals = ChemicalsAPI.filtered(_experiment.chemical_ids);
  const _pictogramMap = PictogramsAPI.pictogramMap(_chemicals);

  if (!_experiment) {
    return <div>Sorry, experiment not found.</div>;
  }

  const cards = _cards.map(card => (
      <Container className="p-1">
          <ExperimentCard
              header = {card.header}
              experimentID = {_experimentID}
              cardId = {card.cardId}
              location = {card.location}
              filename = {card.filename}
            />
       </Container>
      )
  );


  return (
      <Container>
        <Container className="p-1">
          <h3> Week {_experiment.week}: {_experiment.name} </h3>
        </Container>
        
        <Container className="p-1">
          <ExperimentChemicalsCard chemicals={_chemicals} pictogramMap={_pictogramMap} />
        </Container>

        {cards.slice(0,2)}

        <Container className="p-1">
          <ExperimentProceduresCard experimentID={_experimentID} />
        </Container>

        {cards.slice(2,6)}

        <Container className="p-1">
          <Link to="/">Back</Link>{" "}
        </Container>
      </Container>
  );
};

export default Experiment;