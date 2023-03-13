import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Heading from "./Heading";
import Card from "react-bootstrap/Card";

import NavbarEmer from "./navbarEmer";

export default function EmerController() {
  const [state, setState] = useState({});

  return (
    <>
      <Container className={`nav-bar-select-locati`} style={{ height: 55 }}>
        <Heading
          mainName="Emergency Contact"
          subName={(() => {
            if (state.mode === "Overview") {
              return <span>Overview</span>;
            } else if (state.mode === "Gambling") {
              return <span>Gambling</span>;
            } else if (state.mode === "Murder") {
              return <span>Murder</span>;
            } else if (state.mode === "SexualAbuse") {
              return <span>Sexual Abuse</span>;
            } else if (state.mode === "TheftBurglary") {
              return <span>Theft Burglary</span>;
            } else if (state.mode === "BatteryAssault") {
              return <span>Battery Assault</span>;
            } else if (state.mode === "Drug") {
              return <span>Drug</span>;
            } else if (state.mode === "Accident") {
              return <span>Accident</span>;
            } else {
              <span>{state.mode}</span>;
            }
          })()}
        />
        <Card>
          <Row
            xs
            style={{ height: "100%", padding: 10 }}
            //className="rectangle-1378"
          >
            <Col sm>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor:
                    state.mode === "Overview" ? "#47474725" : "white",
                }}
                onClick={() => setState({ mode: "Overview" })}
              >
                <div
                  style={{
                    color: state.mode === "Overview" ? "#479B5F" : "black",
                  }}
                >
                  Overview
                </div>
              </button>
            </Col>
            <Col sm>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor:
                    state.mode === "Gambling" ? "#47474725" : "white",
                }}
                onClick={() => setState({ mode: "Gambling" })}
              >
                <div
                  style={{
                    color: state.mode === "Gambling" ? "#479B5F" : "black",
                  }}
                >
                  Gambling
                </div>
              </button>
            </Col>
            <Col sm>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor:
                    state.mode === "Murder" ? "#47474725" : "white",
                }}
                onClick={() => setState({ mode: "Murder" })}
              >
                <div
                  style={{
                    color: state.mode === "Murder" ? "#479B5F" : "black",
                  }}
                >
                  Murder
                </div>
              </button>
            </Col>
            <Col sm>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor:
                    state.mode === "SexualAbuse" ? "#47474725" : "white",
                }}
                onClick={() => setState({ mode: "SexualAbuse" })}
              >
                <div
                  style={{
                    color: state.mode === "SexualAbuse" ? "#479B5F" : "black",
                  }}
                >
                  Sexual Abuse
                </div>
              </button>
            </Col>
            <Col sm>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor:
                    state.mode === "TheftBurglary" ? "#47474725" : "white",
                }}
                onClick={() => setState({ mode: "TheftBurglary" })}
              >
                <div
                  style={{
                    color: state.mode === "TheftBurglary" ? "#479B5F" : "black",
                  }}
                >
                  Theft Burglary
                </div>
              </button>
            </Col>
            <Col sm>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor:
                    state.mode === "BatteryAssault" ? "#47474725" : "white",
                }}
                onClick={() => setState({ mode: "BatteryAssault" })}
              >
                <div
                  style={{
                    color:
                      state.mode === "BatteryAssault" ? "#479B5F" : "black",
                  }}
                >
                  Battery Assault
                </div>
              </button>
            </Col>
            <Col sm>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor:
                    state.mode === "Drug" ? "#47474725" : "white",
                }}
                onClick={() => setState({ mode: "Drug" })}
              >
                <div
                  style={{
                    color: state.mode === "Drug" ? "#479B5F" : "black",
                  }}
                >
                  Drug
                </div>
              </button>
            </Col>
            <Col sm>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor:
                    state.mode === "Accident" ? "#47474725" : "white",
                }}
                onClick={() => setState({ mode: "Accident" })}
              >
                <div
                  style={{
                    color: state.mode === "Accident" ? "#479B5F" : "black",
                  }}
                >
                  Accident
                </div>
              </button>
            </Col>
          </Row>
        </Card>
        <NavbarEmer data={state.mode} />
      </Container>
    </>
  );
}
