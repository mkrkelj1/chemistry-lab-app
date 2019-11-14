import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button"
import ReactMarkdown from "react-markdown/with-html";
import { ProceduresAPI } from "../../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import _ExperimentProcedureCarousel from "./_ExperimentProcedureCarousel";
// Exports to: ExperimentsCards.js

const cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context("../../assets/markdown/experiments/", true, /\.md$/));

const iconToggle = (state) => {
  const iconDown = <FontAwesomeIcon icon={faChevronDown} />
  const iconUp = <FontAwesomeIcon icon={faChevronUp} />
  return state ? iconUp : iconDown
};


const _ExperimentProceduresCard = ({ experimentId }) => {
  const cardID = "procedure-card-body";
  const procedures = ProceduresAPI.filtered(experimentId);
  const procedureIds = procedures.map(procedure => procedure.procedureID);
  const [openCard, setOpenCard] = useState(false);
  
  const [markdown, setValue] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // Building path: ./1_experiment/procedure/1_procedure.md
      const root_path = "./" + experimentId + "_experiment" + '/procedure/'
      const files = procedureIds.map(id => cache[`${root_path + id}_procedure.md`])
      const promises = await files.map(file =>  fetch(file).then(res => res.text()));
            
            Promise.all(promises).then(results => { 
              const markdownMap = {}
              procedureIds.forEach((key, i) => markdownMap[key] = results[i]);
              setValue(markdownMap)
            });
    }
    fetchData();
  }, []);

  return (
    <Card>
      <Card.Header
        onClick = {() => setOpenCard(!openCard)}
        aria-controls = {cardID}
        aria-expanded = {openCard}
        as = "h2"
        className = "bg-transparent"
      >
        Procedure (Carousel Example)
        {iconToggle(openCard)}
      </Card.Header>
      <Collapse in = {openCard}>
        <div>
            <_ExperimentProcedureCarousel procedureIds = {procedureIds} markdown = {markdown}/>
        </div>
      </Collapse>
    </Card>
  );
};

export default _ExperimentProceduresCard;
