import React, { useState } from "react";
import { MapContainer, GeoJSON,  } from "react-leaflet";

import { useSelector } from "react-redux";

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
    return d > 10
      ? "#800026"
      : d > 9
      ? "#BD0026"
      : d > 8
      ? "#E31A1C"
      : d > 7
      ? "#FC4E2A"
      : d > 6
      ? "#FD8D3C"
      : d > 5
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
    const  crime_rate  = layer.feature.crime_rate
    
    setSelectedFeature({
      id_0: ID_0,
      id_1: ID_1,
      name_th: NL_NAME_1,
      name_en: NAME_1,
      crime_rate: crime_rate
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
    <div class="sm" style={{ marginTop: 16 }}>
      <MapContainer center={[13.751, 100.492]} zoom={5}>
      {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <div className="absolute top-10 right-10 bg-white p-4 rounded-md shadow-md w-60  text-base">
          {!selectedFeature && (
            <div>
              <strong>Thailand Crime rate </strong> <br />
              <span>Hover on each province for more details</span>
            </div>
          )}
          {selectedFeature && (
            <div className="">
              <div>Province Name (English): {selectedFeature.name_en}</div>
              <div>Province Name (Thai): {selectedFeature.name_th}</div>
              <span>Crime Index: {selectedFeature.crime_rate}</span>
            </div>
          )}
        </div>

        <GeoJSON
          data={addCrimeRate(features)}
          style={style}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </div>
  );
}
