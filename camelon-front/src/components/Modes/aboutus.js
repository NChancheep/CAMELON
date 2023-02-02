import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Aboutus() {
    
    return (
        <>
        <div class="p-4 sm:ml-64">
          <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Container>
     
      <Row>
        <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://reactjs.org/logo-og.png" />
            <Card.Body>
              <Card.Title>Chancheep Mahacharoensuk</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card></Col>

        <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://reactjs.org/logo-og.png" />
            <Card.Body>
              <Card.Title>Pattadon Singhajan</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card></Col>

        <Col> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://reactjs.org/logo-og.png" />
            <Card.Body>
              <Card.Title>Kantapong Matangkarat</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card></Col>

      </Row>
    </Container>
          
          
         
          </div>
        </div>
      </>
    );
          

  }

  

