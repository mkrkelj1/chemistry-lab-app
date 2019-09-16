import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "holderjs"

const ImagePlaceholders = () => (
    <Container className="p-3">
      <Row>
        <Col xs={6} md={3}>
          <Image src="holder.js/171x180" rounded />
        </Col>
        
        <Col xs={6} md={3}>
          <Image src="holder.js/171x180" rounded />
        </Col>

        <Col xs={6} md={3}>
          <Image src="holder.js/171x180" rounded />
        </Col>

        <Col xs={6} md={3}>
          <Image src="holder.js/171x180" rounded />
        </Col>
      </Row>
    </Container>
);

export default ImagePlaceholders;