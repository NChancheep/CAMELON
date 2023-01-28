import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
function dashboard() {
    return (
      
      <Container fluid>
        <Row>
        <Col>
        <header>
          Overview
        </header>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col><Button variant="outline-primary" href="#">Overview</Button></Col>
        <Col><Button variant="outline-primary" href="/crimemap">Map</Button></Col>
        <Col><Button variant="outline-primary" href="#">Heat Map</Button></Col>
      </Row>
    </Container>
      
    );
  }
  
  export default dashboard;


