import React, { useState, useEffect, Suspense } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ReactMarkdown from "react-markdown/with-html"
import loadable from '@loadable/component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
// Exports: Experiment.js

const path = require('path');

const cache = {};
function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}
importAll(require.context("../../assets/markdown/experiments/", true, /\.md$/));


const iconToggle = (state) => {
  const iconDown = <FontAwesomeIcon icon={faChevronDown} />
  const iconUp = <FontAwesomeIcon icon={faChevronUp} />
  return state ? iconUp : iconDown
};


const ExperimentCard = ({ header, experimentId, experimentDir, cardId, location }) => {  
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
        onClick={ () => setOpen(!open) } 
        aria-controls = {cardId} 
        aria-expanded={ open } 
        as = "h2"
        className = "bg-transparent"
      >
        { header }
        {iconToggle(open)}
      </Card.Header>
      <Collapse in = { open } >
        <div>
          <Card.Body id = { cardId } >
              <ReactMarkdown source={ markdown } escapeHtml={false} />
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ExperimentCard;