import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// Exports to Course.js
const LabRegulations = () => (
	<Accordion>
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="0">
				Lab Regulations
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="0">
				<Card.Body>
					<p>Lab regulations .....</p>
					<li>Regulation 1...</li>
					<li>Regulation 2 ....</li>
					<li>Regulation 3...</li>
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	</Accordion>
);

export default LabRegulations;
