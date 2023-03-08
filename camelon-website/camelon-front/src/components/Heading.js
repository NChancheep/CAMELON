import React from "react";
import images from "../assets/logo1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Heading() {
  return (
    <Row >
      <Col className="d-flex flex-row-reverse">
        <div style={{marginTop:"2%"}}>
          <h1 style={{ display: "inline" }}>Overview |</h1>
          <img
            src={images}
            width="35"
            alt="Camelon"
            style={{ display: "inline", marginLeft: 20, marginBottom: 13 }}
          />
        </div>
      </Col>
    </Row>
  );
}
