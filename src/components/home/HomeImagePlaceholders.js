import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


const image_style = { "height": "10rem", "width": "10rem" }

const HomeImagePlaceholders = () => (
    <Container className="p-3">
      <Row>
        <Col xs={6} md={3}>
          <Image style = { image_style } src="/../beakers.jpg" rounded />
        </Col>
        
        <Col xs={6} md={3}>
          <Image style = { image_style } src="/../molecule.jpg" rounded />
        </Col>

        <Col xs={6} md={3}>
          <Image style = { image_style } src="/../beakers.jpg" rounded />
        </Col>
        
        <Col xs={6} md={3}>
          <Image style = { image_style } src="/../molecule.jpg" rounded />
        </Col>
      </Row>
    </Container>
);

export default HomeImagePlaceholders;