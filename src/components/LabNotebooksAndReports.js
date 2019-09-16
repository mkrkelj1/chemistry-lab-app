import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


// Exports to Course.js
const LabNotebooksAndReports = () => (
	<Accordion>
	  <Card>
	    <Accordion.Toggle as={Card.Header} eventKey="0">
	      Lab Notebooks and Reports
	    </Accordion.Toggle>
	    <Accordion.Collapse eventKey="0">
	      <Card.Body>
	        <p> Lab notebooks and reports ...... </p>
	      </Card.Body>
	    </Accordion.Collapse>
	  </Card>
	</Accordion>
)

export default LabNotebooksAndReports