import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import MySidebar from './cssFramework/sidebar/mySideBar';
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


  // <Container>
        
  //       <Row md={3}>
  //         <Col>
  //         <div className="mb-1">
  //           <Button variant="primary" size="lg">
  //             Large button
  //           </Button>{' '}
  //         </div>
  //     </Col>
  //     <Col>
  //         <div className="mb-1">
  //           <Button variant="primary" size="lg">
  //             Large button
  //           </Button>{' '}
  //         </div>
  //     </Col>
  //     <Col>
  //         <div className="mb-1">
  //           <Button variant="primary" size="lg">
  //             Large button
  //           </Button>{' '}
  //         </div>
  //     </Col>
  //       </Row>
  //   </Container>