import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button"
import ReactMarkdown from "react-markdown/with-html";
import { ProceduresAPI } from "../../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import ExperimentProcedureButtons from "./ExperimentProcedureButtons"
// Exports to: ExperimentsCards.js


const iconToggle = (state) => {
  const iconDown = <FontAwesomeIcon icon={faChevronDown} />
  const iconUp = <FontAwesomeIcon icon={faChevronUp} />
  return state ? iconUp : iconDown
};


const ExperimentProceduresCard = ({ experimentId }) => {
  const cardID = "procedure-card-body";
  const procedures = ProceduresAPI.filtered(experimentId);
  const procedureIds = procedures.map(procedure => procedure.procedureID);
  const [openCard, setOpenCard] = useState(false);
  
  return (
    <Card>
      <Card.Header
        onClick = {() => setOpenCard(!openCard)}
        aria-controls = {cardID}
        aria-expanded = {openCard}
        as = "h2"
        className = "bg-transparent"
      >
        Procedure
        {iconToggle(openCard)}
      </Card.Header>
      <Collapse in = {openCard}>
        <div>
          <Card.Body id = {cardID}>
            <ExperimentProcedureButtons procedureIds = {procedureIds} experimentId = {experimentId} />
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ExperimentProceduresCard;
