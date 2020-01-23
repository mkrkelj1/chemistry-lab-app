import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Collapse from "react-bootstrap/Collapse";
import { VideosAPI }  from '../../api' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
// Exports to: ExperimentsCards.js


const iconToggle = (state) => {
  const iconDown = <FontAwesomeIcon icon={faChevronDown} />
  const iconUp = <FontAwesomeIcon icon={faChevronUp} />
  return state ? iconUp : iconDown
};


const ExperimentVideosCard = ({videoIds}) => {
  const cardID = "videos-card-body";
  const [open, setOpen] = useState(false);

  const videos = VideosAPI.get(videoIds).map(video => (
    <li key={video.id}><a href={video.url}>{video.title}</a></li>
  ));
  
  return (
    <Card>
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls={cardID}
        aria-expanded={open}
        as="h2"
        className="bg-transparent"
      >
        Videos
        {iconToggle(open)}
      </Card.Header>

      <Collapse in={open}>
        <div>
          <Card.Body id={cardID}>{videos}</Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ExperimentVideosCard;






