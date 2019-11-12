import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}

importAll(require.context("../../assets/home/", false, /\.jpg$/));

const imagesArr = Object.keys(cache);

const image_style = { height: "10rem", width: "10rem" };
const imgCol = imagesArr.map(image => (
  <Col xs={6} md={3}>
    <Image style={image_style} src={cache[image]} rounded />
  </Col>
));

const HomeImagePlaceholders = () => (
  <Container className="p-1">
    <Row>{imgCol}</Row>
  </Container>
);

export default HomeImagePlaceholders;