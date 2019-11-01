import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button"
import ReactMarkdown from "react-markdown/with-html";
import { ProceduresAPI } from "../../api";
import ExperimentProcedureButtons from "./ExperimentProcedureButtons"

const ExperimentProceduresCard = ({ experimentID }) => {
  const cardID = "procedure-card-body";
  const procedures = ProceduresAPI.filtered(experimentID);
  const procedureIds = procedures.map(procedure => procedure.procedureID);
  const [openCard, setOpenCard] = useState(false);
  
  return (
    <Card>
      <Card.Header
        onClick={() => setOpenCard(!openCard)}
        aria-controls={cardID}
        aria-expanded={openCard}
      >
        Procedure
      </Card.Header>
      <Collapse in={openCard}>
        <Card.Body id={cardID}>
          <ExperimentProcedureButtons procedureIds = {procedureIds} experimentID = {experimentID} />
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default ExperimentProceduresCard;
