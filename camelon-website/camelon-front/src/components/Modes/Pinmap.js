import React, { useState, useEffect } from "react";
import L from "leaflet";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import "leaflet/dist/leaflet.css";
import "../../css/Pinmap.css";
import Accident_Icon from "../../assets/iconPin/ColorIcon/Accident_Green.png";
import Assault_Icon from "../../assets/iconPin/ColorIcon/Assault_Green.png";
import Drug_Icon from "../../assets/iconPin/ColorIcon/Drugs_Green.png";
import Gambling_Icon from "../../assets/iconPin/ColorIcon/Gambling_Green.png";
import Murder_Icon from "../../assets/iconPin/ColorIcon/Murder_Green.png";
import SexualAbuse_Icon from "../../assets/iconPin/ColorIcon/Sexual_Abuse_Green.png";
import Theft_Icon from "../../assets/iconPin/ColorIcon/Theft_Green.png";
import Other_Icon from "../../assets/iconPin/ColorIcon/Other_Green.png";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LayersControl,
} from "react-leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useSelector } from "react-redux";

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });

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
    return L.icon({
      iconUrl: Other_Icon,
      iconSize: [45, 59],
    });
  }
}
// L.Marker.prototype.options.icon = DefaultIcon;

function TimeSlider() {
  return <input type="range" min="0" max="100" />;
}

export default function Pinmap() {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const { locations } = useSelector((state) => state.data);
  const { news_info } = useSelector((state) => state.data);
  const { news } = useSelector((state) => state.data);
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
    return text.toString().replace(/\[|\]/g, "").trim();
  }

  function showNews(datetime) {
    if (
      Date.parse(dateRange[0]) <= Date.parse(datetime) &&
      Date.parse(datetime) <= Date.parse(dateRange[1])
    ) {
      return true;
    } else {
      return false;
    }
  }

  const [mapLayers, setMapLayers] = useState({
    street: true,
    satellite: false,
    dark: false,
  });

  function PinMap() {
    const layerGroups = {};

    // Group markers based on their crime types
    locations.forEach((location) => {
      const news_data = news_info.find(
        (news) => news.info_id === location.info_id
      );
      const news_datetime = news.find(
        (news) => news.news_id === news_data.news_id
      ).publish_date;
      // console.log(showNews(news_datetime));

      const crimeType = news_data.crime_type;
      const icon = getIconForCrimeType(crimeType);
      L.Marker.prototype.options.icon = icon;
      if (!layerGroups[crimeType]) {
        layerGroups[crimeType] = [];
      }

      const fontSize = { fontSize: 16 };
      const titleStyle = { fontWeight: 500, color: "#44985B" };
      {
        showNews(news_datetime) &&
          layerGroups[crimeType].push(
            <Marker
              position={[location.latitude, location.longitude]}
              icon={icon}
            >
              <Popup>
                <div className="mb-2">
                  <div style={fontSize}>
                    {" "}
                    <span style={titleStyle}>Criminal: </span>{" "}
                    {trimString(news_data.criminal)
                      ? trimString(news_data.criminal)
                      : "ไม่มีข้อมูล"}{" "}
                  </div>
                  <div style={fontSize}>
                    {" "}
                    <span style={titleStyle}>Action: </span>
                    {trimString(news_data.action)
                      ? trimString(news_data.action)
                      : "ไม่มีข้อมูล"}{" "}
                  </div>
                  <div style={fontSize}>
                    {" "}
                    <span style={titleStyle}>Victim: </span>
                    {trimString(news_data.victim)
                      ? trimString(news_data.victim)
                      : "ไม่มีข้อมูล"}{" "}
                  </div>
                  <div style={fontSize}>
                    {" "}
                    <span style={titleStyle}>Date: </span>{" "}
                    {trimString(news_data.datetime)
                      ? trimString(news_data.datetime)
                      : "ไม่มีข้อมูล"}{" "}
                  </div>
                  <div style={fontSize}>
                    {" "}
                    <span style={titleStyle}>Address: </span>
                    {trimString(location.formatted_address)
                      ? trimString(location.formatted_address)
                      : "ไม่มีข้อมูล"}{" "}
                  </div>
                </div>
                <div className="popup-action">
                  <button
                    style={{ width: "100%" }}
                    type="button"
                    className="bg-white hover:bg-gray-700 text-black font-bold border py-2 px-4 rounded"
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
                    อ่านเพิ่มเติม..
                  </button>
                </div>
              </Popup>
            </Marker>
          );
      }
    });

    const crimeTypeLayers = Object.keys(layerGroups).map((crimeType) => (
      <LayersControl.Overlay name={crimeType} key={crimeType} checked={true}>
        <MarkerClusterGroup chunkedLoading>
          {layerGroups[crimeType]}
        </MarkerClusterGroup>
      </LayersControl.Overlay>
    ));

    return (
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked={mapLayers.street} name="Street">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked={mapLayers.satellite} name="Satellite">
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
    );
  }

  useEffect(() => {
    console.log(startDate);
    PinMap();
    console.log("re-render pin map!");
  }, [startDate]);

  function DateSelect() {
    return (
      <Row>
        <Col sm={2} className="d-flex flex-row-reverse">
          <span>Select Date Range:</span>
        </Col>
        <Col sm={2}>
          <DatePicker
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
          />
          {/* <DatePicker
          style={{width:"50%"}}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          /> */}
        </Col>
        {/* <Col sm={2}>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </Col> */}
      </Row>
    );
  }

  return (
    <>
      {" "}
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
            <PinMap />
          </MapContainer>
        </div>
      </div>
      <DateSelect class="z-index-10 bg-danger position-absolute" />
    </>
  );
}
