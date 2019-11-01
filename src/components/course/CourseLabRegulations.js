import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown/with-html"


// Exports to Course.js
const CourseLabRegulations = ({ courseId }) => {
  const [markdown, setValue] = useState([]);

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