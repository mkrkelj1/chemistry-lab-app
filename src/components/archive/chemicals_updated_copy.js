import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


const Chemicals = ( { chemicals } ) => {

	const chemicalCards = chemicals.map((chemical, i) =>
		<React.Fragment>
			<Card.Subtitle className="mb-2">{chemical.name}</Card.Subtitle>
			<Card.Text>Highly flammable liquid and vapor. Causes mild skin irritation.</Card.Text>
			<hr />
		</React.Fragment>
	)

return (<Accordion>
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="0">
				Chemicals
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="0">

				<Card.Body>
					{ chemicalCards } 
				</Card.Body>


			</Accordion.Collapse>
		</Card>
	</Accordion>)	
};

export default Chemicals;