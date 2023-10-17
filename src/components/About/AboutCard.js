import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />I am working as a full-stack web engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Detective Novel
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Ball Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Making friends
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Bringing Everyone's Strength Together!"{" "}
          </p>
          <footer className="blockquote-footer">Gunther</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
