import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillSkype
} from "react-icons/ai";
import {
  FaDiscord
} from "react-icons/fa";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Gunther Nico</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Making something that is &nbsp;
              <b>visible to others</b>, <b>something that touches people</b>, <b>something that can be experienced</b>. <br />
              I would like to introduce myself as an&nbsp;
              <i><b>energetic person</b></i> who takes your business seriously, in an accessible and open way. <br />

              After work experience in IT, I have developed many modern-style websites using modern  <b>JavaScript libraries</b>  like <b className="purple">React, Meteor</b>. <br />
              <i><b>My favorite part about web design</b></i> &nbsp; is building a solution that&nbsp;<b className="purple">impresses the client</b> and <b className="purple">meets the needs of users and customers</b>. <br />

              Also, I have teamwork traits including <i><b className="purple">reliability</b></i>, <i><b className="purple">good communication</b></i>, <i><b className="purple">commitment</b></i>, <i><b className="purple">adaptability</b></i>. <br />
              <br />
              Professional Experiences: <br />
              &nbsp;&nbsp; Frontend: <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- HTML, CSS, CSS frameworks like Bootstrap, Semantic UI. <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- JavaScrip, JQuery, React, Angular, Meteor js, Gatsby js, Vue js. <br />
              &nbsp;&nbsp; Backend: <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- Node js, Express js, Next js. <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- Django, Django Rest Framework, Flask. <br />
              &nbsp;&nbsp; DataBase: <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- MongoDB <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- Google Firebase <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- MySQL <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- Redis <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- PostgreSQL <br />
              &nbsp;&nbsp; API: <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-REST API <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-Twilio, Vonage Communications APIs (formerly Nexmo), Plivo, Podium, Telnyx, <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Zipwhip, CometChat, MessageBird.  <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-GraphQL, Apollo <br />
              &nbsp;&nbsp; DevOps operations:  <br />
              &nbsp;&nbsp;&nbsp;&nbsp;- Github, Gitlab, Bitbucket, AWS, Github actions, Trello, Jenkins, AWS S3. <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-thumbnail circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ONLINE</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links w-50">
              <li className="social-icons">
                <a
                  href="mailto:web.developer7290@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/coder7290"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://join.skype.com/invite/vrs03YnsWJ3v"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillSkype />
                </a>
              </li>
                    
              <li className="social-icons">
                <a
                  href="https://discord.gg/unuwEbfq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
