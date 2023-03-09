import React, { useState, useEffect } from "react";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "../../css/Pinmap.css";
import testIcon from './test-icon.jpg';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LayersControl,
} from "react-leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";

import { useSelector } from "react-redux";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

// L.Marker.prototype.options.icon = DefaultIcon;

export default function Pinmap() {
  const { locations } = useSelector((state) => state.data);
  const { news_info } = useSelector((state) => state.data);
  const { user_current_location } = useSelector((state) => state.data);

  function SetView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    // var newMarker = new L.circle(coords).addTo(map);
    // var marker = L.circle(coords, 1609.34, {
    //   color: "blue",
    //   fillColor: "blue",
    // }).addTo(map);
    return null;
  }


  const [mapLayers, setMapLayers] = useState({
    street: true,
    satellite: false,
    dark: false,
  });

  const layerGroups = {};

  // Group markers based on their crime types
  locations.forEach((location) => {
    const news = news_info.find((news) => news.info_id === location.info_id);
    const crimeType = news.crime_type;
    
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: testIcon,
      shadowUrl: iconShadow,
    })
    if (!layerGroups[crimeType]) {
      layerGroups[crimeType] = [];
    }

    layerGroups[crimeType].push(
      <Marker position={[location.latitude, location.longitude]}>
        <Popup>
          <div> Criminal: {news.criminal} </div>
          <div> Action: {news.action} </div>
          <div> Victim: {news.victim} </div>
          <div> Address: {location.formatted_address} </div>
          <div className="popup-action">
            <button onClick={() => console.log("hello")}> Read more... </button>
          </div>
        </Popup>
      </Marker>
    );
  });

  const crimeTypeLayers = Object.keys(layerGroups).map((crimeType) => (
    <LayersControl.Overlay name={crimeType} key={crimeType} checked={true}>
      <MarkerClusterGroup chunkedLoading>
        {layerGroups[crimeType]}
      </MarkerClusterGroup>
    </LayersControl.Overlay>
  ));

  return (
    <>
      <div class="sm" style={{ marginTop: 16 }}>
        <div class="p-1 border-2 border-gray-200 border rounded dark:border-gray-700">
          <MapContainer
            center={[13.751, 100.492]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <SetView
              coords={[
                user_current_location.latitude,
                user_current_location.longitude,
              ]}
            />
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked={mapLayers.street} name="Street">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer
                checked={mapLayers.satellite}
                name="Satellite"
              >
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer checked={mapLayers.dark} name="Dark">
                <TileLayer
                  attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
              {crimeTypeLayers}
            </LayersControl>
          </MapContainer>
        </div>
      </div>
    </>
  );
}
