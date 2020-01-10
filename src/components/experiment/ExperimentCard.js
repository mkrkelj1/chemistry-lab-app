import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Content, _Content } from "../../ContentAPI"
import ExperimentProcedureCarousel from "./ExperimentProcedureCarousel"

/*
Exports to: ExperimentsCards.js
Creates Cards: 
 - Prelab Assignment 
 - Theoretical Background, 
 - Results
 - Study Questions
 - Discussion
 - Waste Disposal
*/

const iconToggle = (state) => {
  const iconDown = <FontAwesomeIcon icon={faChevronDown} />
  const iconUp = <FontAwesomeIcon icon={faChevronUp} />
  return state ? iconUp : iconDown
};

const ExperimentCard = ({ card, experiment }) => {
  const header = card.header;
  const cardId = card.cardId;
  const experimentId = experiment.experimentID;
  const contentId = card.Id;
  const cardContent = Content.get(experimentId, contentId);
  const [open, setOpen] = useState(false);


  if (contentId == 3) {
    return (
      <ExperimentProcedureCarousel
        cardContent = {cardContent}
        open={open}
        cardId={cardId}
        header={header}
        setOpen={setOpen}
        iconToggle={iconToggle}
      />
    );
  }

  return (
    <Card>
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls={cardId}
        aria-expanded={open}
        as="h2"
        className="bg-transparent"
      >
        {header}
        {iconToggle(open)}
      </Card.Header>
      <Collapse in={open}>
        <div>
          <Card.Body id={cardId}>
            {cardContent}
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};


export default ExperimentCard;