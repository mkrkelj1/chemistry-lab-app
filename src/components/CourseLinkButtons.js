import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

//Exports to Home.js
const CourseLinkButtons = () => (
    <Container className="p-3">
      <Button variant="primary" href="/courses/1" block>
        Spectroscopy
      </Button>

      <Button variant="secondary" href="/courses/2" block>
        Organic Chemistry
      </Button>
    </Container>
);

export default CourseLinkButtons;