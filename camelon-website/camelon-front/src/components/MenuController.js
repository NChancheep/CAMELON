import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Display from "./Display";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filtter from "./Filtter";
import Heading from "./Heading";
import Card from "react-bootstrap/Card";

export default function MenuController() {
  const [state, setState] = useState({ mode: "overview" });
  const styleButton = {
    marginTop: "2%",
    height: "6em",
    width: "100%",
    borderRadius: 8,
  };
  var buttonClass =
    "flex items-center justify-center font-bold border border-black";
  return (
    <>
      <Container>
        <div></div>
        <Heading
          mainName="Home"
          subName={(() => {
            if (state.mode === "overview") {
              return <span>Overview</span>;
            } else if (state.mode === "pin_map") {
              return <span>Map</span>;
            } else if (state.mode === "heat_map") {
              return <span>Heat map</span>;
            } else if (state.mode === "aboutus") {
              return <span>About us</span>;
            } else if (state.mode === "choropleth_map") {
              return <span>Choropleth Map</span>;
            } else {
              <span>Overview</span>;
            }
          })()}
        />
        <Row xs style={{ marginBottom: "2%", height: "100%" }}>
          <Col sm>
            <button
              style={styleButton}
              onClick={() => setState({ mode: "overview" })}
              disabled={(() => {
                if (state.mode === "overview") {
                  return true;
                } else {
                  return false;
                }
              })()}
              class={buttonClass}
            >
              <div
                class="text-xl"
                style={{
                  color: state.mode === "overview" ? "#479B5F" : "black",
                }}
              >
                Overview
              </div>
            </button>
          </Col>
          <Col sm>
            <button
              style={styleButton}
              onClick={() => setState({ mode: "pin_map" })}
              disabled={(() => {
                if (state.mode === "pin_map") {
                  return true;
                } else {
                  return false;
                }
              })()}
              class={buttonClass}
            >
              <div
                class="text-xl"
                style={{
                  color: state.mode === "pin_map" ? "#479B5F" : "black",
                }}
              >
                Map
              </div>
            </button>
          </Col>
          <Col sm>
            <button
              style={styleButton}
              onClick={() => setState({ mode: "heat_map" })}
              disabled={(() => {
                if (state.mode === "heat_map") {
                  return true;
                } else {
                  return false;
                }
              })()}
              class={buttonClass}
            >
              <div
                class="text-xl"
                style={{
                  color: state.mode === "heat_map" ? "#479B5F" : "black",
                }}
              >
                Heat Map
              </div>
            </button>
          </Col>
          <Col sm>
            <button
              style={styleButton}
              onClick={() => setState({ mode: "choropleth_map" })}
              disabled={(() => {
                if (state.mode === "choropleth_map") {
                  return true;
                } else {
                  return false;
                }
              })()}
              class={buttonClass}
            >
              <div
                class="text-xl"
                style={{
                  color: state.mode === "choropleth_map" ? "#479B5F" : "black",
                }}
              >
                Choropleth map
              </div>
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
