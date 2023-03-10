import React, { useState, useEffect } from "react";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "../../css/Pinmap.css";
import Accident_Icon from "../../assets/iconPin/ColorIcon/Accident_Green.png";
import Assault_Icon from "../../assets/iconPin/ColorIcon/Assault_Green.png";
import Drug_Icon from "../../assets/iconPin/ColorIcon/Drugs_Green.png";
import Gambling_Icon from "../../assets/iconPin/ColorIcon/Gambling_Green.png";
import Murder_Icon from "../../assets/iconPin/ColorIcon/Murder_Green.png";
import SexualAbuse_Icon from "../../assets/iconPin/ColorIcon/Sexual_Abuse_Green.png";
import Theft_Icon from "../../assets/iconPin/ColorIcon/Theft_Green.png";

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

function getIconForCrimeType(crimeType) {
  if (crimeType === "SexualAbuse") {
    return L.icon({
      iconUrl: SexualAbuse_Icon,
      iconSize: [45, 59],
    });
  } else if (crimeType === "Theft_Burglary") {
    return L.icon({
      iconUrl: Theft_Icon,
      iconSize: [45, 59],
    });
  } else if (crimeType === "Murder") {
    return L.icon({
      iconUrl: Murder_Icon,
      iconSize: [45, 59],
    });
  } else if (crimeType === "Gambling") {
    return L.icon({
      iconUrl: Gambling_Icon,
      iconSize: [45, 59],
    });
  } else if (crimeType === "Battery_Assault") {
    return L.icon({
      iconUrl: Assault_Icon,
      iconSize: [45, 59],
    });
  } else if (crimeType === "Drug") {
    return L.icon({
      iconUrl: Drug_Icon,
      iconSize: [45, 59],
    });
  } else if (crimeType === "Accident") {
    return L.icon({
      iconUrl: Accident_Icon,
      iconSize: [45, 59],
    });
  } else {
    return DefaultIcon;
  }
}
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

  function trimString(text) {
   
    return text.toString().replace(/\[|\]/g, '').trim()
    
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
    const icon = getIconForCrimeType(crimeType);
    L.Marker.prototype.options.icon = icon;
    if (!layerGroups[crimeType]) {
      layerGroups[crimeType] = [];
    }

    layerGroups[crimeType].push(
      <Marker position={[location.latitude, location.longitude]} icon={icon}>
        <Popup>
          <div className="mb-2">
            <div> Criminal: {trimString(news.criminal)} </div>
            <div> Action: {trimString(news.action)} </div>
            <div> Victim: {trimString(news.victim)} </div>
            <div> Date: {trimString(news.datetime)} </div>
            <div> Address: {trimString(location.formatted_address)} </div>
          </div>
          <div className="popup-action">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
              onClick={(e) => {
                e.preventDefault();
                const regex = /(\d+)/;
                const match = regex.exec(news.news_id);
                const news_id = match[1];
                if (news.news_id.includes("THR")) {
                  window.location.href =
                    "https://www.thairath.co.th/news/" + news_id;
                } else {
                  window.location.href =
                    "https://d.dailynews.co.th/crime/" + news_id;
                }
              }}
            >
              {" "}
              Read More...
            </button>
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
      <input type="range" min="1" max="600" />
    </>
  );
}
