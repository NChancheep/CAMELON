import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Heading from "./Heading";

import NavbarEmer from "./navbarEmer";

export default function EmerController() {
  const [state, setState] = useState({});

  return (
    <>
      <Container className={`nav-bar-select-locati`} style={{ height: 55 }}>
        <Heading
          mainName="Emergency Contact"
          subName={state.mode ? state.mode : "Overview"}
        />
        <Row className="rectangle-1378">
        <Col className="text-0">
            <button onClick={() => setState({ mode: "Oveview" })}>
              <div>Overview</div>
            </button>
          </Col>
          <Col className="text-0">
            <button onClick={() => setState({ mode: "Gambling" })}>
              <div>Gambling</div>
            </button>
          </Col>
          <Col className="text-1">
            <button onClick={() => setState({ mode: "Murder" })}>
              <div>Murder</div>
            </button>
          </Col>
          <Col className="text-2">
            <button onClick={() => setState({ mode: "SexualAbuse" })}>
              <div>SexualAbuse</div>
            </button>
          </Col>
          <Col className="text-3">
            <button onClick={() => setState({ mode: "TheftBurglary" })}>
              <div>TheftBurglary</div>
            </button>
          </Col>
          <Col className="text-4">
            <button onClick={() => setState({ mode: "BatteryAssault" })}>
              <div>BatteryAssault</div>
            </button>
          </Col>
          <Col className="text-5">
            <button onClick={() => setState({ mode: "Drug" })}>
              <div>Drug</div>
            </button>
          </Col>
          <Col className="text-6">
            <button onClick={() => setState({ mode: "Accident" })}>
              <div>Accident</div>
            </button>
          </Col>
        </Row>
        <NavbarEmer data={state.mode} />
      </Container>
    </>
  );
}
