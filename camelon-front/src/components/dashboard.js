import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import MySidebar from './cssFramework/sidebar/mySideBar';
function dashboard() {
    return (
      <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
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