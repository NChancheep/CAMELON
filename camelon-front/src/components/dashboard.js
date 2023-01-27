import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function dashboard() {
    return (
      <Container>
        <Row md={3}>
          <Col>
          <div className="mb-1">
            <Button variant="primary" size="lg">
              Large button
            </Button>{' '}
          </div>
      </Col>
      <Col>
          <div className="mb-1">
            <Button variant="primary" size="lg">
              Large button
            </Button>{' '}
          </div>
      </Col>
      <Col>
          <div className="mb-1">
            <Button variant="primary" size="lg">
              Large button
            </Button>{' '}
          </div>
      </Col>
        </Row>
    </Container>
    );
  }
  
  export default dashboard;