import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const iconToggle = (state) => {
  const iconDown = <FontAwesomeIcon icon={faChevronDown} />
  const iconUp = <FontAwesomeIcon icon={faChevronUp} />
  return state ? iconUp : iconDown
};


const ExperimentChemicalsCard = ( { chemicals, pictogramMap } ) => {
	const image_style = { height: "3rem" };
	const cardID = "chemicals-card-body";
	const [open, setOpen] = useState(false);

	const imageElements = chemicalID => {
	  const pictograms = pictogramMap[chemicalID];
	  if (pictograms[0].pictogramID === 10) {
	    return null;
	  }
	  return pictograms.map(pictogram => (
	    <Card.Img 
	    	variant="buttom"
	    	src={ require('../../assets/pictograms/' + pictogram.filename ) }
	    	style={image_style} />
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
			<Card.Header 
				onClick={() => setOpen(!open)} 
				aria-controls={ cardID } 
				aria-expanded={ open } 
				as = "h2"
          		className = "bg-transparent"
			>
				Chemicals
				{iconToggle(open)}
			</Card.Header>

			<Collapse in={ open } >
				<div>
					<Card.Body id={ cardID } >
						{ chemicalCard }
					</Card.Body>
				</div>
			</Collapse>
		</Card>
	);	
}

export default ExperimentChemicalsCard;







