import React, { useState, useEffect, Suspense } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ReactMarkdown from "react-markdown/with-html"
import loadable from '@loadable/component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const path = require('path');
const cache = {};
function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}
importAll(require.context("../../assets/markdown/experiments/", true, /\.md$/));

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
  const header = card.header
  const cardId = card.cardId
  const location = card.location
  const experimentId = experiment.experimentID
  const experimentDir = experiment.experimentDir
  const [markdown, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const file_root = "./" + experimentId + "_" + "experiment" + "/"
      const filename = experimentId + '_' + location + '.md'
      const filepath = file_root + location + "/" + filename
      const path = cache[filepath]
      const markdown = await fetch(path).then(res => res.text());
      setValue(markdown);
    }
    fetchData();
  }, []);

  return (
    <Card>
      <Card.Header 
        onClick = {() => setOpen(!open)} 
        aria-controls = {cardId} 
        aria-expanded = {open} 
        as = "h2"
        className = "bg-transparent"
      >
        { header }
        {iconToggle(open)}
      </Card.Header>
      <Collapse in = { open } >
        <div>
          <Card.Body id = { cardId } >
              <ReactMarkdown source = { markdown } escapeHtml = {false} />
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ExperimentCard;