import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


// Exports to Course.js
const ExperimentSchedule = () => (
	<Accordion>
	  <Card>
	    <Accordion.Toggle as={Card.Header} eventKey="0">
	      Experiment Schedule
	    </Accordion.Toggle>
	    <Accordion.Collapse eventKey="0">
	      <Card.Body>
	        <ul>
			  <li>09/13: Extracting .... </li>
		      <li>09/20: Microscope testing ...</li>
			  <li>09/27: Synthesizing stuff</li>
			  <li>10/04: Ions and bonds ...</li>
	    	</ul>
	      </Card.Body>
	    </Accordion.Collapse>
	  </Card>
	</Accordion>
)

export default ExperimentSchedule