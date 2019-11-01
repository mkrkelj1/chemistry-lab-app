import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button"
import ReactMarkdown from "react-markdown/with-html";
import Container from "react-bootstrap/Container";

const ExperimentProcedureButtons = ({ procedureIds, experimentID }) => {
  //const procedureRange = Array.from({length: procedureIds.length}, (v, k) => k + 1); 
  const [markdown, setValue] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const experimentDir = experimentID + "_experiment"
      const root_path = "/../markdown/experiments/" + experimentDir + "/procedure/"
      const files = procedureIds.map(id => `${root_path + id}_procedure.md`)
      const promises = await files.map(file =>  fetch(file).then(res => res.text()));

            Promise.all(promises).then(results => { 
              const markdownMap = {}
              procedureIds.forEach((key, i) => markdownMap[key] = results[i]);
              setValue(markdownMap)
            });
    }
    fetchData();
  }, []);

  const ProcedureButton = props => {
    const [open, setOpen] = React.useState(false);

    return (
        <Container className="p-1" id = "ProcedureButtons">
            <Button variant="outline-info" onClick={() => setOpen(!open)}>Step: {props.step}</Button>
            <br/><br/>

            <Collapse in={open}>
              <div>
                <ReactMarkdown source={props.markdown} escapeHtml={false} />
              </div>
            </Collapse>
        </Container>
    );
  };

  const RenderButtons = ({ procedureIds }) => {
    return procedureIds.map((id, i) => 
      <ProcedureButton key={ id } markdown = { markdown[id] } step = { i + 1 } />);
  };

  return <RenderButtons procedureIds={procedureIds} />;
};

export default ExperimentProcedureButtons;

 