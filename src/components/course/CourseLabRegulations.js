import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown/with-html"
import Collapse from "react-bootstrap/Collapse";

// Exports to Course.js
const CourseLabRegulations = ({ courseId }) => {
  const cardId = 'lab-regulations-card-body'
  const [markdown, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const courseDir = courseId + "_course"
      const root_path = "/../markdown/courses/" + courseDir + "/regulations/"
      const file_name = "regulations.md"
      const path = root_path + file_name
      const markdown = await fetch(path).then(res => res.text());
      setValue(markdown);
    }
    fetchData();
  }, []);

  return (
    <Card>
      <Card.Header onClick={ () => setOpen(!open) } aria-controls = {cardId} aria-expanded={ open } >
        Lab Regulations
      </Card.Header>

      <Collapse in = { open } >
      <div>
        <Card.Body>
          <ReactMarkdown source={ markdown } escapeHtml={false} />
        </Card.Body>
      </div>
      </Collapse>
    </Card>
  );
};

export default CourseLabRegulations;