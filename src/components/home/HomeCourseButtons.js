import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomeCourseButtons = () => (
    <Container className="p-1">
	    <row>
			<Col >
				<Button variant = "primary" href="/#/courses/1" >
			 		Introduction to Organic Chemistry
			 	</Button>
			 </Col>
		</row>
    </Container>
);

export default HomeCourseButtons;