import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ReactMarkdown from "react-markdown/with-html"


// Exports: Experiment.js
const ExperimentCard = ({ header, experimentID, cardId, location, filename }) => {  
  const [markdown, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const experimentDir = experimentID + "_experiment"
      const root_path = "/../markdown/experiments/" + experimentDir + location 
      const path = root_path + experimentID + filename
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