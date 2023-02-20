import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Display from "./Display";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filtter from "./Filtter";
import Heading from "./Heading";

export default function MenuController() {
  const [state, setState] = useState({ mode: "aboutus" });

  return (
    <>
      <Container>
        <Row>
          <Col sm={7}></Col>
          <Col sm={5} style={{ marginTop: 46 }}>
            <Heading></Heading>
          </Col>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <Col sm>
            <button
              style={{ height: 100, width: 415 }}
              onClick={() => setState({ mode: "overview" })}
              class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24"
            >
              <div class="text-xl">Overview</div>
            </button>
          </Col>
          <Col sm>
            <button
              style={{ height: 100, width: 415 }}
              onClick={() => setState({ mode: "pin_map" })}
              class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24"
            >
              <div class="text-xl">Map</div>
            </button>
          </Col>
          <Col sm>
            <button
              style={{ height: 100, width: 415 }}
              onClick={() => setState({ mode: "heat_map" })}
              class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24"
            >
              <div class="text-xl">Heat Map</div>
            </button>
          </Col>
        </Row>
        <div style={{ marginTop: 16 }}>
          <Filtter></Filtter>
        </div>
        <Display data={state.mode} />
      </Container>
    </>
  );
}
