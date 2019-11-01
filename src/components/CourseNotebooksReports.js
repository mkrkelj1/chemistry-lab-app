import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown/with-html"


// Exports to Course.js
const CourseNotebooksReports = ({ courseID }) => {
	const [markdown, setValue] = useState([]);

	  useEffect(() => {
	    async function fetchData() {
	      const path = "/../markdown/notebooks/" + courseID + "_notebook.md";
	      const markdown = await fetch(path).then(res => res.text());
	      setValue(markdown);
	    }
	    fetchData();
	  }, []);

	return(
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="1">
		      Notebooks and Reports
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="1">
		        <Card.Body>
		          <ReactMarkdown source = { markdown } escapeHtml={ false } />
		        </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		);
};

export default CourseNotebooksReports


