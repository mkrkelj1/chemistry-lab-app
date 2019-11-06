import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown/with-html"
import Collapse from "react-bootstrap/Collapse";

const cache = {};
function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}
importAll(require.context("../../assets/markdown/courses/", true, /\.md$/));


// Exports to Course.js
const CourseLabRegulations = ({ courseId, location }) => {
  const cardId = 'lab-regulations-card-body'
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
        <Card.Header onClick={ () => setOpen(!open) } aria-controls = {cardId} aria-expanded={ open } >
          Lab Regulations
        </Card.Header>

        <Collapse in = { open } >
        <div>
          <Card.Body>
            <ReactMarkdown source={ markdown } escapeHtml={false} />
          </Card.Body>
        </div>
        </Collapse>
      </Card>
    </div>
  );
};

export default CourseLabRegulations;