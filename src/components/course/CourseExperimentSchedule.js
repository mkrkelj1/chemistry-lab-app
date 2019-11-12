import React, { useState, useEffect } from "react";
import { ExperimentsAPI }  from '../../api'
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
// Exports to Course.js


const iconToggle = (state) => {
  const iconDown = <FontAwesomeIcon icon={faChevronDown} />
  const iconUp = <FontAwesomeIcon icon={faChevronUp} />
  return state ? iconUp : iconDown
};

const CourseExperimentSchedule = ({ courseId }) => {
  const cardId = 'experiment-schedule-card-body'
  const [markdown, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  const renderDate = date => (dayjs(date).format("MM/DD"))

  const schedule = () => {
    return ExperimentsAPI.filtered(courseId).map(e => (
      <React.Fragment>
        <li key={e.experimentID}>
          {renderDate(e.startDate)}-{renderDate(e.endDate)}: &nbsp;
          <Link to={`${courseId}/experiments/${e.experimentID}`}>{e.name}</Link>
        </li>
      </React.Fragment>
    ));
  };
  
  return (
    <div className="p-1">
      <Card >
        <Card.Header 
          onClick={ () => setOpen(!open) } 
          aria-controls = {cardId} 
          aria-expanded = {open} 
          as = "h2"
          className = "bg-transparent"
        >
          Experiment Schedule

          {iconToggle(open)}
        
        </Card.Header>
        <Collapse in = { open } >
          <div>
          <Card.Body id = { cardId }>
            <ul>
              {schedule()}
            </ul>
          </Card.Body>
          </div>
        </Collapse>
      </Card>
    </div>
  );
};

export default CourseExperimentSchedule;
