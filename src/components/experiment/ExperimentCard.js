import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ReactMarkdown from "react-markdown/with-html"

const path = require('path');

// Exports: Experiment.js
const ExperimentCard = ({ header, experimentId, experimentDir, cardId, location }) => {  
  const [markdown, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const filename = experimentId + '_' + location + '.md'
      const file_path = path.join(experimentDir, location, filename);
      const root_path = "/../markdown/experiments/"
      const _path = root_path + file_path
      const markdown = await fetch(_path).then(res => res.text());
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
      >
        { header }
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