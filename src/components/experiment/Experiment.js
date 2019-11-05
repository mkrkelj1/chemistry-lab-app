import React, { useState } from "react";
import { CardsAPI, ExperimentsAPI, ChemicalsAPI, PictogramsAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ExperimentCard from "./ExperimentCard";
import ExperimentChemicalsCard from "./ExperimentChemicalsCard";
import ExperimentProceduresCard from "./ExperimentProceduresCard";


const Experiment = props => {
  const [open, setOpen] = useState(false);
  const _cards = CardsAPI.all();
  const _courseId = parseInt(props.match.params.id, 10);
  const _experimentId = parseInt(props.match.params.experimentID, 10);
  const _experiment = ExperimentsAPI.get(_courseId, _experimentId);
  const _experimentDir = _experiment.experimentDir
  const _chemicals = ChemicalsAPI.filtered(_experiment.chemical_ids);
  const _pictogramMap = PictogramsAPI.pictogramMap(_chemicals);

  if (!_experiment) {
    return <div>Sorry, experiment not found.</div>;
  }

  const cards = _cards.map(card => (
    <Container className="p-1">
      <ExperimentCard
        header={card.header}
        experimentId={_experimentId}
        experimentDir={_experimentDir}
        cardId={card.cardId}
        location={card.location}
      />
    </Container>
  ));

  const ExpChemCard = (
    <Container className="p-1">
      <ExperimentChemicalsCard chemicals={_chemicals} pictogramMap={_pictogramMap} />
    </Container>
  );

  const ExpProcCard = (
    <Container className="p-1">
      <ExperimentProceduresCard experimentID={_experimentId} />
    </Container>
  );

  cards.splice(0, 0, ExpChemCard); // Insert Chemicals card at 0 index
  cards.splice(3, 0, ExpProcCard); // Insert Procedure card at 3 index

  return (
    <Container>
      <Container className="p-1">
        <h3>
          Week {_experiment.week}: {_experiment.name}{" "}
        </h3>
      </Container>

      {cards}

    </Container>
  );
};

export default Experiment;