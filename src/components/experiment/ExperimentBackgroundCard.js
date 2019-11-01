import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ReactMarkdown from "react-markdown/with-html"


// Exports: Experiment.js
const ExperimentBackgroundCard = ({ experimentID }) => {
  const cardID = 'theoretical-background-card-body'
  const [markdown, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const experimentDir = experimentID + "_experiment"
      const root_path = "/../markdown/experiments/" + experimentDir + "/background/"
      const path = root_path + experimentID + "_background.md";
      const markdown = await fetch(path).then(res => res.text());
      setValue(markdown);
    }
    fetchData();
  }, []);

  return (
    <Card>
      <Card.Header onClick={ () => setOpen(!open) } aria-controls = {cardID} aria-expanded={ open } >
        Theoretical Background
      </Card.Header>
      <Collapse in = { open } >
        <Card.Body id = { cardID } >
          <ReactMarkdown source={markdown} escapeHtml={false} />
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default ExperimentBackgroundCard;



