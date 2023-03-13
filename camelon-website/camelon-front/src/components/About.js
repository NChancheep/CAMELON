import React from "react";
import Sidebar2 from "./Sidebar2";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Jump from "../../src/assets/Poto/jump.jpg";
import Cheep from "../../src/assets/Poto/cheep.jpg";
import Pete from "../../src/assets/Poto/pete.jpg";
import Ing from "../../src/assets/Poto/siripen.png";
import Aum from "../../src/assets/Poto/suppawong.png";

const ContactUs = () => {
  return (
    <main>
      <div id="outer-container">
        <Sidebar2
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <Container>
        <Row>
          <Col sm className="d-flex justify-content-center">
            <h1>What is Camelon</h1>
          </Col>
        </Row>
        <text>
          {" "}
          We would like to mention our appreciation to our advisor Dr. Siripen
          Pongpaichet who has helped us in every aspect, whether it is
          consultants or inspectors for our project, with gracious support. In
          addition, we would like to be grateful to the faculty of information
          and communication technology for always supporting us. Whether it is a
          complete tool, a place that works with quality, and quality teaching.
          Finally, we would like to thank the members of the team for their hard
          work.
        </text>
        <br />
        <br />
        <h3>Motivation</h3>
        <text>
          {" "}
          Currently, in society almost everywhere, crime is going on every
          corner. Everyone can see it in the news, whether it be robbery,
          hijacking, or even murder. Therefore, Citizens do not feel safe. To
          keep every citizen safe, People involved in law and civilization need
          to have a good policy to manage these matters. For example, the police
          may have to do more surveillance in crime-prone areas to reduce the
          amount of loss of life and property. Unfortunately, it is hard to make
          a good policy because of the difficulty of telling if each area is
          going to have a high risk of crime or not. The research team realized
          the problems mentioned above and thought that the project that the
          seniors had already finished could continue to make it more useful. It
          is very gratifying to be able to take advantage of what is already
          there and to take the old project as a base and develop it into a web
          application. In order to bring visualization to the map to enable
          users or the general public to use it in their daily lives to give
          those involved in an overview of crime problems across Bangkok by
          themself. It is essential that the web application will be able to
          facilitate all stakeholders not only to use and protect people by
          making our society and our nation more livable and safer but also
          enabling people to be able to apply our media in various fields,
          especially in terms of being a medium for use in decision making.
        </text>

        <Container>
          <Row>
            <Col sm className="d-flex justify-content-center">
              <h1>Meet Our Team</h1>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <div style={{ width: "13rem" }}>
                <Card.Img variant="top" src={Cheep} />
                <Card.Body>
                  <Card.Title>Chancheep Mahacharoensuk</Card.Title>
                </Card.Body>
              </div>
            </Col>
            <Col sm>
              <div style={{ width: "13rem" }}>
                <Card.Img variant="top" src={Jump} />
                <Card.Body>
                  <Card.Title>Kantapong Matangkarat</Card.Title>
                </Card.Body>
              </div>
            </Col>
            <Col sm>
              <div style={{ width: "13rem" }}>
                <Card.Img variant="top" src={Pete} />
                <Card.Body>
                  <Card.Title>Pattadon Singhajan</Card.Title>
                </Card.Body>
              </div>
            </Col>
            <Col sm>
              <div style={{ width: "13rem" }}>
                <Card.Img variant="top" src={Ing} />
                <Card.Body>
                  <Card.Title>Lect. Dr. Siripen Pongpaichet</Card.Title>
                </Card.Body>
              </div>
            </Col>
            <Col sm>
              <div style={{ width: "13rem" }}>
                <Card.Img variant="top" src={Aum} />
                <Card.Body>
                  <Card.Title>Assoc. Prof. Dr. Suppawong Tuarob</Card.Title>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default ContactUs;
