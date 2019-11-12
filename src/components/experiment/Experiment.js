import React, { useState } from "react";
import { CardsAPI, CoursesAPI, ExperimentsAPI, ChemicalsAPI, PictogramsAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ExperimentBreadcrumb from "./ExperimentBreadcrumb";
import ExperimentCard from "./ExperimentCard";
import ExperimentChemicalsCard from "./ExperimentChemicalsCard";
import ExperimentProceduresCard from "./ExperimentProceduresCard";

//const array = [{id: 1, date: "Mar 12 2012 10:00:00 AM"}, {id: 2, date: "Mar 18 2012 08:00:00 AM"}];
//const arr = array.sort(function(a,b){
//  return new Date(b.date) - new Date(a.date);
//});
//const arr2 = arr.map((obj, i) => ({ ...obj, order: i + 1 }))



const Experiment = props => {
  const [open, setOpen] = useState(false);
  const _cards = CardsAPI.all();
  const _courseId = parseInt(props.match.params.id, 10);
  const _courseName = CoursesAPI.get(_courseId).name
  const _experimentId = parseInt(props.match.params.experimentID, 10);
  const _experiment = ExperimentsAPI.get(_courseId, _experimentId);
  const _startDate = _experiment.startDate
  const _endDate = _experiment.endDate
  const _experimentDir = _experiment.experimentDir
  const _chemicals = ChemicalsAPI.filtered(_experiment.chemical_ids);
  const _pictogramMap = PictogramsAPI.pictogramMap(_chemicals);
  const _ordered = ExperimentsAPI.ordered(_courseId);
  const _order = _ordered.filter(e => e.experimentID === _experimentId)[0].order

  if (!_experiment) {
    return <div>Sorry, experiment not found.</div>;
  }

  const cards = _cards.map(card => (
    <Container className="p-1">
      <ExperimentCard
        header = {card.header}
        experimentId = {_experimentId}
        experimentDir = {_experimentDir}
        cardId = {card.cardId}
        location = {card.location}
      />
    </Container>
  ));

  const ExpChemCard = (
    <Container className="p-1">
      <ExperimentChemicalsCard 
        chemicals = {_chemicals} 
        pictogramMap = {_pictogramMap} 
      />
    </Container>
  );

  const ExpProcCard = (
    <Container className="p-1">
      <ExperimentProceduresCard experimentId={_experimentId} />
    </Container>
  );

  cards.splice(0, 0, ExpChemCard); // Insert Chemicals card at 0 index
  cards.splice(3, 0, ExpProcCard); // Insert Procedure card at 3 index

  return (
    <Container>
      <Container className="p-1">
        <ExperimentBreadcrumb 
          courseId = {_courseId} 
          courseName = {_courseName}
          experimentName = {_experiment.name}
          startDate = {_startDate}
          endDate = {_endDate}
          order = {_order}
          />
      </Container>

      <Container className="p-1">
        <h3>
          {_experiment.name}
        </h3>
      </Container>

      {cards}

    </Container>
  );
};

export default Experiment;