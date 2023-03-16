import React, { useState } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";

import { useSelector } from "react-redux";
import "./ChoroplethMap.css";
import "../../css/setfont.css"

export default function ChoroplethMap() {
  const { thailandGeoJson } = useSelector((state) => state.data);
  const { locations } = useSelector((state) => state.data);
  let features = thailandGeoJson[0].features;

  const [selectedFeature, setSelectedFeature] = useState(null);

  function addCrimeRate(data) {
    return data.map((item) => ({
      ...item,
      crime_rate: getCrimeRate(item.properties.NAME_1),
    }));
  }

  function getCrimeRate(name) {
    // console.log(name)
    let crime_count = 0;
    locations.map((location) => {
      if (location.formatted_address.includes(name)) {
        crime_count += 1;
      }
    });
    return crime_count;
  }

  const getColor = (d) => {
    return d >= 35
      ? "#800026"
      : d > 30
      ? "#BD0026"
      : d > 25
      ? "#E31A1C"
      : d > 20
      ? "#FC4E2A"
      : d > 15
      ? "#FD8D3C"
      : d > 10
      ? "#FEB24C"
      : "#FED976";
  };

  const style = (feature) => {
    return {
      fillColor: getColor(feature.crime_rate),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  const highlightFeature = (e) => {
    const layer = e.target;
    const { ID_0, ID_1, NL_NAME_1, NAME_1 } = layer.feature.properties;
    const crime_rate = layer.feature.crime_rate;

    setSelectedFeature({
      id_0: ID_0,
      id_1: ID_1,
      name_th: NL_NAME_1,
      name_en: NAME_1,
      crime_rate: crime_rate,
    });
    layer.setStyle({
      weight: 1,
      color: "black",
      fillOpacity: 1,
    });
  };

  const resetHighlight = (e) => {
    setSelectedFeature(null);
    e.target.setStyle(style(e.target.feature));
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  };

  return (
    <div class="sm" className="font-link" style={{ marginTop: 16 }}>
      <div className="p-1 border-2 border-gray-200 border rounded dark:border-gray-700">
        <MapContainer center={[13.751, 100.492]} zoom={5}>
          <TileLayer
            attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          />
          <div
            className="absolute top-10 right-10 bg-white p-4 rounded-md shadow-md w-60  text-base"
            style={{ zIndex: 999 }}
          >
            {!selectedFeature && (
              <div style={{fontFamily: 'Kanit'}}>
                <strong>อัตราอาชญากรรมของประเทศไทย</strong> <br />
                <span>เลื่อนเมาส์ไปที่แต่ละจังหวัดเพื่อดูรายละเอียดเพิ่มเติม</span>
              </div>
            )}
            {selectedFeature && (
              <div style={{fontFamily: 'Kanit'}}className="">
                <div>Province Name (English): {selectedFeature.name_en}</div>
                <div>{selectedFeature.name_th}</div>
                <span>ดัชนีอาชญากรรม (Crime Index): {selectedFeature.crime_rate}</span>
              </div>
            )}
          </div>

          <GeoJSON
            data={addCrimeRate(features)}
            style={style}
            onEachFeature={onEachFeature}
          />
          <div
            className="absolute bottom-5 left-10 bg-white p-4 rounded-md shadow-md w-70  text-base"
            style={{ zIndex: 999 }}
          >
            <div style={{fontFamily: 'Kanit'}} className="legend">
              <div style={{ "--color": "#800026" }}>อันตราย!!!</div>
              <div style={{ "--color": "#BD0026" }}>ค่อนข้างอันตรายมาก</div>
              <div style={{ "--color": "#E31A1C" }}>ค่อนข้างอันตราย</div>
              <div style={{ "--color": "#FC4E2A" }}>ปกติ</div>
              <div style={{ "--color": "#FD8D3C" }}>ค่อนข้างน้อย</div>
              <div style={{ "--color": "#FED976" }}>น้อย</div>
            </div>
          </div>
        </MapContainer>
      </div>
    </div>
  );
}
