import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

//Exports to Home.js
const CourseLinkButtons = () => (
    <Container className="p-3">
      <Button variant="primary" href="#" block>
        Introduction to Organic Chemistry
      </Button>

      <Button variant="secondary" href="#" block>
        Modern Techniques of Organic Chemistry
      </Button>
    </Container>
);

export default CourseLinkButtons;