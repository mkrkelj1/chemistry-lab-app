//import React from "react";
import React, { useState } from "react";
import { ExperimentsAPI, ChemicalsAPI, PictogramsAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ExperimentBackgroundCard from "./ExperimentBackgroundCard";
import ExperimentChemicalsCard from "./ExperimentChemicalsCard"
import ExperimentProceduresCard from "./ExperimentProceduresCard"


const Experiment = props => {
  const [open, setOpen] = useState(false);
  const _courseID = parseInt(props.match.params.id, 10);
  const _experimentID = parseInt(props.match.params.experimentID, 10);
  const _experiment = ExperimentsAPI.get(_courseID, _experimentID);
  const _chemicals = ChemicalsAPI.filtered(_experiment.chemical_ids);
  const _pictogramMap = PictogramsAPI.pictogramMap(_chemicals);

  if (!_experiment) {
    return <div>Sorry, experiment not found.</div>;
  }

  return (
      <Container>
        <Container className="p-1">
          <h3> Week {_experiment.week}: {_experiment.name} </h3>
        </Container>
        
        <Container className="p-1">
          <ExperimentChemicalsCard chemicals={_chemicals} pictogramMap={_pictogramMap} />
        </Container>

        <Container className="p-1">
          <ExperimentBackgroundCard experimentID={_experimentID} />
        </Container>
        <Container className="p-1">
          <ExperimentProceduresCard experimentID={_experimentID} />
        </Container>

        <Container className="p-1">
          <Link to="/">Back</Link>{" "}
        </Container>
      </Container>
  );
};

export default Experiment;