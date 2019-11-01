import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown/with-html"


// Exports to Course.js
const CourseLabRegulations = () => {
  const [markdown, setValue] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const path = "/../markdown/lab_regs.md";
      const markdown = await fetch(path).then(res => res.text());
      setValue(markdown);
    }
    fetchData();
  }, []);

  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="2">
        Lab Regulations
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
          <ReactMarkdown source={markdown} escapeHtml={false} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default CourseLabRegulations;