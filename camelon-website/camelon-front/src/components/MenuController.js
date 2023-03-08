import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Display from "./Display";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filtter from "./Filtter";
import Heading from "./Heading";
import Card from "react-bootstrap/Card";

export default function MenuController() {
  const [state, setState] = useState({ mode: "aboutus" });

  return (
    <>
      <Container>
        <div ></div>
        <Heading ></Heading>
        <Row xs style={{ marginBottom: "2%", height: "100%" }}>
          <Col sm>
            <button
              style={{ marginTop: "2%", height: "6em", width: "100%" }}
              onClick={() => setState({ mode: "overview" })}
              class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24"
            >
              <div class="text-xl">Overview</div>
            </button>
          </Col>
          <Col sm>
            <button
              style={{ marginTop: "2%", height: "6em", width: "100%" }}
              onClick={() => setState({ mode: "pin_map" })}
              class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24"
            >
              <div class="text-xl">Map</div>
            </button>
          </Col>
          <Col sm>
            <button
              style={{ marginTop: "2%", height: "6em", width: "100%" }}
              onClick={() => setState({ mode: "heat_map" })}
              class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24"
            >
              <div class="text-xl">Heat Map</div>
            </button>
          </Col>
          <Col sm>
            <button
              style={{ marginTop: "2%", height: "6em", width: "100%" }}
              onClick={() => setState({ mode: "heat_map" })}
              class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24"
            >
              <div class="text-xl">Choropleth map</div>
            </button>
          </Col>
        </Row>

        <Row xs>
          <Col>
            <Card>
              <Filtter></Filtter>
            </Card>
          </Col>
        </Row>
        <Display data={state.mode} />
      </Container>
    </>
  );
}
