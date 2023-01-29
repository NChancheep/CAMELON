import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { locations } from "./test_data";
import 'leaflet/dist/leaflet.css';
import './crimeMap.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from '../cssFramework/sidebar/mySideBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CrimeMap = () => {

    return(
        <> 
            <Container fluid>
            <Row>
          <Navbar/>
        </Row>
        <Row>
        <Card>
            <Card.Body>
           <MapContainer center={[13.751, 100.492]} zoom={13}> 
                <TileLayer
                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations.map((location) => (
                    <Marker position={[location.latitude, location.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}> 
                        {/* Add Popup tag with additional details 
                        <Popup>
                            {crime_info}
                        </Popup>
                        */}
                        <Popup> 
                            {location.latitude}
                            {location.longitude}
                        </Popup>

                    </Marker>
                ))}
           </MapContainer>
           <Button variant="primary">sth</Button>
           <Button variant="primary">sth</Button>
           <Button variant="primary">sth</Button>
           </Card.Body>
           </Card>
        </Row>
            
            
           </Container>
        </>

    );
};

export default CrimeMap;