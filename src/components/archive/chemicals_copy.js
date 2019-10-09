import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// Exports to Experiments.js
const Chemicals = ( { chemicals } ) => (


	//const chemicals = chemicals[0];

	// 	{ chemicals[0].name }

	// this.state.data.map((item,i) => <li key={i}>Test</li>)


	

	<Accordion>
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="0">
				Chemicals
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="0">

				<Card.Body>
					<Card.Subtitle className="mb-2">Acetone</Card.Subtitle>
					<Card.Text>Highly flammable liquid and vapor. Causes mild skin irritation.</Card.Text>
					<hr />
					<Card.Subtitle className="mb-2">Methanol</Card.Subtitle>
					<Card.Text>Highly flammable liquid and vapor. Toxic if swallowed.</Card.Text>
					<hr />
					<Card.Subtitle className="mb-2">Diethyl ether</Card.Subtitle>
					<Card.Text>Highly flammable liquid and vapor. Serious eye injury.</Card.Text>
				</Card.Body>


			</Accordion.Collapse>
		</Card>
	</Accordion>
);

export default Chemicals;