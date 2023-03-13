import React from "react";
import BarChart from "./chart/BarChart";
import RadarChart from "./chart/RadarChart";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Overview() {
  return (
    <div class="sm" style={{ marginTop: 16 }}>
      <Container>
        <Row >
          <Col><BarChart /></Col>
          <Col><RadarChart /></Col>
        </Row>
      </Container>
    </div>
  );
}
