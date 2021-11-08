import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My work <strong className="purple">State</strong>
      </h1>
      <GitHubCalendar
        username="coder7290"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
