import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiPython,
    DiHtml5,
    DiCss3,
} from "react-icons/di";
import { 
    SiTypescript,
    SiPhp,
    SiRuby,
    SiJava,
    SiR,
    SiGo
} from "react-icons/si";

function Languagestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 aria-details="asdf" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRuby />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>
    </Row>
  );
}

export default Languagestack;
