import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const HomeSeeAllVideosButton = () => (
  
    <Container className="p-1">
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button variant="secondary" href="https://mkrkelj1.github.io/chemistry-lab-app/#/videos"  block>
        See All Video Tutorials
      </Button>
      </div>
    </Container>
  
);

export default HomeSeeAllVideosButton;