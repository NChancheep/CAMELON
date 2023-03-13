import React from "react";
import BarChart from "./BarChart";
import RadarChart from "./RadarChart";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function Overview() {
  return (
    <div class="sm" style={{ marginTop: 16 }}>
      <div class="text-xl">Hey, this is Overview</div>
      <Container>
        <Row>
          <BarChart />
          <RadarChart />
        </Row>
      </Container>
    </div>
  );
}
