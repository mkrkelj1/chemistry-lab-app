import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Collapse from "react-bootstrap/Collapse";


const ExperimentChemicalsCard = ( { chemicals, pictogramMap } ) => {
	const root_path = "/../pictograms/";
	const image_style = { height: "3rem" };
	const cardID = "chemicals-card-body";
	const [open, setOpen] = useState(false);

	const imageElements = chemicalID => {
	  const pictograms = pictogramMap[chemicalID];
	  if (pictograms[0].pictogramID === 10) {
	    return null;
	  }
	  return pictograms.map(pictogram => (
	    <Card.Img variant="buttom" src={root_path + pictogram.filename} style={image_style} />
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
			<Card.Header onClick={() => setOpen(!open)} aria-controls={ cardID } aria-expanded={ open } >
				Chemicals
			</Card.Header>

			<Collapse in={ open } >
				<Card.Body id={ cardID } >{ chemicalCard }</Card.Body>
			</Collapse>
		</Card>
	);	
}

export default ExperimentChemicalsCard;