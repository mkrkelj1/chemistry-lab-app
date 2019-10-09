import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";



// Exports to Course.js
const CourseLabNotebooksAndReports = () => {

return(
	  <Card>
	    <Accordion.Toggle as={Card.Header} eventKey="1">
	      Lab Notebooks and Reports
	    </Accordion.Toggle>
	    <Accordion.Collapse eventKey="1">
	      <Card.Body>
	        <p> Lab notebooks and reports ...... </p>
	      </Card.Body>
	    </Accordion.Collapse>
	  </Card>
	);
};

export default CourseLabNotebooksAndReports
