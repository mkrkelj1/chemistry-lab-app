import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown/with-html"
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}
importAll(require.context("../../assets/markdown/courses/", true, /\.md$/));


const iconToggle = (state) => {
  const iconDown = <FontAwesomeIcon icon={faChevronDown} />
  const iconUp = <FontAwesomeIcon icon={faChevronUp} />
  return state ? iconUp : iconDown
};


// Exports to Course.js
const CourseNotebooksReports = ({ courseId, location }) => {
  const cardId = "notebook-card-body";
  const [markdown, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const file_root = "./" + courseId + "_" + "course" + "/"
      const filename = location + '.md'
      const filepath = file_root + location + "/" + filename
      const path = cache[filepath]
      const markdown = await fetch(path).then(res => res.text());
      setValue(markdown);
    }
    fetchData();
  }, []);

  return (
    <div className="p-1">
      <Card>
        <Card.Header 
          onClick={() => setOpen(!open)} 
          aria-controls={cardId} 
          aria-expanded={open} 
          as = "h2"
          className = "bg-transparent"
        >
          Notebooks and Reports
          {iconToggle(open)}
        </Card.Header>

        <Collapse in={open}>
        <div>
          <Card.Body id={cardId}>
            <ReactMarkdown source={markdown} escapeHtml={false} />
          </Card.Body>
          </div>
        </Collapse>
      </Card>
    </div>
  );
};

export default CourseNotebooksReports;


