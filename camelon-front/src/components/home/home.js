import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from '../cssFramework/sidebar/mySideBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './home.css';

function home() {
    return (
      <Container fluid>
        <Row>
          <Navbar/>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col><Button variant="outline-primary" href="#">Overview</Button></Col>
          <Col><Button variant="outline-primary" href="/crimemap">Map</Button></Col>
          <Col><Button variant="outline-primary" href="#">About us</Button></Col>
        </Row>
      </Container>
     
    );
  }
  
  export default home;



