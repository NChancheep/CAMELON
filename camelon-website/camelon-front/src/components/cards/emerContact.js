import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsFillTelephoneFill } from "react-icons/bs";

function EmergencyBanner(props) {
  return (
    <Card
      className="justify-content-center align-items-center"
      style={{ width: "100%", marginTop:30, height:"80%" ,}}
    >
      <Container style={{ margin: 10 }}>
        <Row>
          <Col sm={2}>
            <img
              src={props.images}
              width="52"
              alt="logo"
              style={{ display: "inline" }}
            />
          </Col>
          <Col
            sm={6}
            className="justify-content-center d-flex align-items-center"
          >
            <h5 style={{ fontSize: 20, textAlign:"center"  }}>{props.Name}</h5>
          </Col>
          <Col
            sm={2}
            className="align-items-center justify-content-center d-flex"
          >
            <BsFillTelephoneFill size={24}/>
          </Col>
          <Col
            className="justify-content-center d-flex align-items-center"
            style={{ fontSize: 20, fontWeight: 400 }}
          >
            {props.callNum}
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default EmergencyBanner;
