import React from "react";
import Sidebar2 from "./Sidebar2";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";

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
        <h1>Meet Our Team</h1>
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
            <Col>
              <div style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t1.6435-9/163937029_3790817514348058_2393931198420441797_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF2R7bjmW-6idtpMiNcHZMoCBU8Ul4zi7AIFTxSXjOLsA-BSc8GgLWy3a5FtuSqHwtHdIXqD1pa9dCzPB-4pLpR&_nc_ohc=ROBrgsAsu1AAX_TFAD_&_nc_ht=scontent.fbkk12-5.fna&oh=00_AfB9DAVGeCvq1rehp9d6eTvYYEiKQOUiVzLar33mR6k3KQ&oe=6436190B"
                />
                <Card.Body>
                  <Card.Title>Chancheep Mahacharoensuk</Card.Title>
                  
                </Card.Body>
              </div>
            </Col>

            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t1.6435-9/166602694_2279749302159169_1129387676197536862_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoIfmIXadkF58WtpIa_ftE0ELSDsj2N3bQQtIOyPY3dixFGY0B_yF3hlPQ_vn1F9nSPtG9P8cWmbcFbsu1iA6J&_nc_ohc=4GL3rJlVlTMAX-pz5Y1&_nc_ht=scontent.fbkk12-5.fna&oh=00_AfBQcZBSW6wPZN_dZcYJonzplEnHL3vrsjzywtPlQvJoJA&oe=64360FCE"
                />
                <Card.Body>
                  <Card.Title>Pattadon Singhajan</Card.Title>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t1.6435-9/162545352_2504059616406151_2002383930436508196_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE2kvFCbFqgXtQYJi8Seexq7NLPpRPaSrDs0s-lE9pKsIFhS8kYBvpYYPU1luUDINtLm_IstSgU-GIK7GLaC35s&_nc_ohc=KvsG_dQp-0sAX9Y0UFD&_nc_ht=scontent.fbkk12-5.fna&oh=00_AfBzJJJuikHD7w7VNBfQMlRH_sebpHzMT7dbO9rGk5A_mQ&oe=643612DC"
                />
                <Card.Body>
                  <Card.Title>Kantapong Matangkarat</Card.Title>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default ContactUs;
