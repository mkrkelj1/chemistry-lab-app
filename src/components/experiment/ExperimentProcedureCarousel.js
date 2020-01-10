import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { CarouselProvider,Slider,Slide,ButtonBack,ButtonNext} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


const procedures = (cardContent) => {
  const slides = cardContent.map((slide, index) => (
      <Slide index = { index } > {slide} </Slide>
    ))
  return slides
}

const ExperimentProcedureCarousel = ({ cardContent, open, cardId, header, setOpen,iconToggle }) => {

  const procedureSlides = procedures(cardContent)
  const totalSlides = cardContent.length

  return (
    <Card>
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls={cardId}
        aria-expanded={open}
        as="h2"
        className="bg-transparent"
      >
        {header}
        {iconToggle(open)}
      </Card.Header>
      <Collapse in={open}>
        <div>
          <Card.Body id={cardId}>
            <CarouselProvider
              naturalSlideWidth={75}
              naturalSlideHeight={125}
              totalSlides={totalSlides}
            >
              <Slider>
                {procedureSlides}
              </Slider>

              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ExperimentProcedureCarousel;
