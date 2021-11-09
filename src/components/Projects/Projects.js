import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import TwilioChat from "../../assets/projects/twilio-chat.gif";
import CarPlateRead from "../../assets/projects/car-plate.jpg";
import AndNowUKnow from "../../assets/projects/andnowuknow.jpg";
import Ustwo from "../../assets/projects/ustwo.com.gif";
import PhotoEditor from "../../assets/projects/photo-editor.gif";
import Altasalud from "../../assets/projects/altasalud.com.ar.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TwilioChat}
              isBlog={false}
              title="TwilioChat"
              description="Public and Private chat for the users. Using React js, Node js, Firebase, Twilio API, Implemented Push-Notification."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AndNowUKnow}
              isBlog={false}
              title="AndNowUKnow"
              description="AndNowUKnow is a website company dedicated to delivering the latest news, trends and market updates for and about the produce industry"
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PhotoEditor}
              isBlog={false}
              title="Photo Editor"
              description="Photo editor using Angular"
              link="https://github.com/coder7290/angular-photo-editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Altasalud}
              isBlog={false}
              title="Altasalud.com.ar"
              description="Alta Salud es el primer edifico de alto estándar en Los Ángeles y la provincia del Bio Bio"
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ustwo}
              isBlog={false}
              title="Ustwo.com"
              description="Ustwo is a global digital product studio launching products, services and companies that make a meaningful impact on the world."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarPlateRead}
              isBlog={false}
              title="Car plate number read amd Face recognize."
              description="Recognize Car plate from car and read Plate number, and Face detect and blur it. Used tech: OpenCV, Platerecognizer API, YoloFace python packages"
              link="https://github.com/coder7290/Python-Face-Detection-and-Car-Number-Read"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
