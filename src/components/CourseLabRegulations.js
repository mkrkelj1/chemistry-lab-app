import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


// Exports to Course.js
const CourseLabRegulations = () => {
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="2">
				Lab Regulations
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="2">
				<Card.Body>
					<p>Lab regulations .....</p>
					<li>Regulation 1...</li>
					<li>Regulation 2 ....</li>
					<li>Regulation 3...</li>
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

export default CourseLabRegulations;