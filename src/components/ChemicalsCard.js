import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const root_path = '/../GHS-Pictograms/'
const image_style = { "height": "3rem" }

const ChemicalsCard = ( { chemicals, _pictogramMap } ) => {

	const imageElements = chemicalID => {
		const pictograms = _pictogramMap[chemicalID];
		  return pictograms.map(pictogram => (
		    <React.Fragment> 
		    	<Card.Img variant="buttom" src = {root_path + pictogram.filename} style = {image_style} /> 
		    </React.Fragment>
		  ));
	};

	const chemicalCard = chemicals.map((chemical, i) =>
		<React.Fragment>
			<Card.Title > { chemical.name } </Card.Title>
			<Card.Subtitle className="mb-2 text-muted"> CAS { chemical.cas } </Card.Subtitle>
			<Card.Text> { chemical.safety_guideline } </Card.Text>
			{imageElements(chemical.chemicalID)}
			<hr />
		</React.Fragment>
	);

	return (
		<Card>
			<Accordion.Toggle as = {Card.Header} eventKey="0"> Chemicals </Accordion.Toggle>
			<Accordion.Collapse eventKey="0">
				<Card.Body> { chemicalCard } </Card.Body>
			</Accordion.Collapse>
		</Card>
	);	
}

export default ChemicalsCard;