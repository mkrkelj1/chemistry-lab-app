import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// Exports to Experiments.js
const TheoreticalBackground = () => (
	<Accordion>
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="0">
				Theoretical Background
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="0">
				<Card.Body>
					<Card.Subtitle className="mb-2">Introduction</Card.Subtitle>
					<Card.Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud{" "}
					</Card.Text>
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	</Accordion>
);

export default TheoreticalBackground;