import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// Todo: Check length --> if only 1, don't return tabs.

const ExperimentProcedureTabs = ({
  cardContent,
  open,
  cardId,
  header,
  setOpen,
  iconToggle
}) => {
  const [key, setKey] = useState("home");

  const tabs = cardContent.map((content, index) => (
    <Tab eventKey={index} title={"Step " + (index + 1)}>
      <div style={{ marginTop: 25 }}>{content}</div>
    </Tab>
  ));

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
            <Tabs fill justify activeKey={key} onSelect={k => setKey(k)}>
              {tabs}
            </Tabs>
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ExperimentProcedureTabs;
