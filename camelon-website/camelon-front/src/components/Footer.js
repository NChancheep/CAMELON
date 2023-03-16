import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <Row>
        <section className="d-flex justify-content-center justify-content-lg-between p-4">
          <Col style={{ width: "100%" }}>
            <div>
              <span>National software contest 2023</span>
            </div>
          </Col>
          <Col style={{ width: "100%" }}>
            <div>
              <span style={{ width: "100%" }}>
                The Faculty of Information and Communication Technology, Mahidol
                University
              </span>
            </div>
          </Col>
          <Col style={{ width: "100%" }}>
            <div>
              <span>Camelon Team</span>
            </div>
          </Col>
        </section>
      </Row>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 ICT Mahidol University:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Camelon
        </a>
      </div>
    </MDBFooter>
  );
}
