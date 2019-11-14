import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import ReactMarkdown from "react-markdown/with-html";
import { ProceduresAPI } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,  faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import _lorem from "./_lorem";


const iconLeft = <FontAwesomeIcon icon={faChevronLeft} />;
const iconRight = <FontAwesomeIcon icon={faChevronRight} />;

const _ExperimentProcedureCarousel = ({ procedureIds, markdown }) => {
  const cardID = "procedure-card-body";
  
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const CarouselItems = procedureIds.map(id => (
    <Carousel.Item>
      <ReactMarkdown source={markdown[id]} escapeHtml={false} />
    </Carousel.Item>
  ));

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <React.Fragment>
      <div className="card-header-procedure">
        Step {index + 1}
      </div>

      <Card.Body id={cardID}>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
          interval={0}
        >
          {CarouselItems}
        </Carousel>
      </Card.Body>

      <Card.Footer className="text-center">This is the footer.</Card.Footer>
    </React.Fragment>
  );
};
export default _ExperimentProcedureCarousel;
