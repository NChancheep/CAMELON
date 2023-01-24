import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { locations } from "./test_data";

import 'leaflet/dist/leaflet.css';
import './crimeMap.css';

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const CrimeMap = () => {

    return(
        <> 
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
        </>

    );
};

export default CrimeMap;