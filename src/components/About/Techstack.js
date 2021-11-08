import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMeteor,
  DiAngularSimple,
  DiJqueryLogo,
  DiExtjs
} from "react-icons/di";
import { 
  SiNextDotJs,
  SiVueDotJs,
  SiDjango,
  SiFlask,
  SiRedux,
  SiVuetify,
  SiMaterialUi,
  SiStorybook,
  SiBootstrap,
  SiLaravel,
  SiCodeigniter,
  SiEmberDotJs,
  SiNuxtDotJs
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialUi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEmberDotJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNuxtDotJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiExtjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMeteor />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextDotJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVueDotJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuetify />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeigniter />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
    </Row>
  );
}

export default Techstack;
