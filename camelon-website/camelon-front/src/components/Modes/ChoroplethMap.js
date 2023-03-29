import React, { useState, useEffect } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";

import { useSelector } from "react-redux";
import "../../css/ChoroplethMap.css";
import "../../css/setfont.css";
import GaugeChart from "react-gauge-chart";
import { polygon, point, booleanPointInPolygon } from "@turf/turf";

export default function ChoroplethMap() {
  const { thailandGeoJson } = useSelector((state) => state.data);
  const { locations } = useSelector((state) => state.data);
  const { news_info } = useSelector((state) => state.data);
  let features = thailandGeoJson[0].features;
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [data, setData] = useState(null);
  const [isShow, setIsShow] = useState(false);

  function addCrimeRate(data) {
    return data.map((item) => ({
      ...item,
      crime_rate: getCrimeRateAndMeter(item.geometry.coordinates[0]).crime_rate,
      crime_meter: getCrimeRateAndMeter(item.geometry.coordinates[0])
        .crime_meter,
    }));
  }

  useEffect(() => {
    const crimeRateData = addCrimeRate(features);
    setData(crimeRateData);
  }, [features]);

  // Show pin map once data is available
  useEffect(() => {
    if (data) {
      setIsShow(true);
    }
  }, [data]);

  function getCrimeWeight(crimeTypeMetadata) {
    switch (crimeTypeMetadata) {
      case "SexualAbuse":
        return 2;
      case "Murder":
        return 4;
      case "Gambling":
        return 1;
      case "Accident":
        return 1;
      case "Theft_Burglary":
        return 3;
      case "Battery_Assault":
        return 2;
      case "Drug":
        return 2;
      default:
        return 1;
    }
  }
  // const provinceName = selectedFeature.name_th;
  function getCrimeRateAndMeter(coordinates) {
    let total_crime = 0;
    let crime_weight_sum = 0;

    if (coordinates.length > 4) {
      const poly = polygon([coordinates]);
      locations.forEach((location) => {
        const pt = point([location.longitude, location.latitude]);
        if (booleanPointInPolygon(pt, poly)) {
          let news_data = news_info.find(
            (news) => news.info_id === location.info_id
          );
          crime_weight_sum += getCrimeWeight(news_data.crime_type);
          total_crime += 1;
        }
      });
    }
    console.log("=========================================================");
    // console.log(provinceName);
    // console.log(selectedFeature.name_th);
    console.log("=========================================================");
    let crime_meter = crime_weight_sum / 100;
    return { crime_rate: total_crime, crime_meter: crime_meter };
  }

  const getColor = (d) => {
    return d >= 3
      ? "#800026"
      : d > 1.5
      ? "#BD0026"
      : d > 1
      ? "#FD8D3C"
      : d > 0.5
      ? "#a6d96a"
      : "#198754";
  };

  const style = (feature) => {
    return {
      fillColor: getColor(feature.crime_meter),

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
    const crime_meter = layer.feature.crime_meter;

    setSelectedFeature({
      id_0: ID_0,
      id_1: ID_1,
      name_th: NL_NAME_1,
      name_en: NAME_1,
      crime_rate: crime_rate,
      crime_meter: crime_meter,
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
    <div
      class="sm"
      className="font-link"
      style={{ marginTop: 16, marginBottom: "5%" }}
    >
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
              <div style={{ fontFamily: "Kanit" }}>
                <strong>อัตราอาชญากรรมของประเทศไทย</strong> <br />
                <span>
                  เลื่อนเมาส์ไปที่แต่ละจังหวัดเพื่อดูรายละเอียดเพิ่มเติม
                </span>
              </div>
            )}
            {selectedFeature && (
              <div style={{ fontFamily: "Kanit" }} className="">
                <div>{selectedFeature.name_th}</div>
                <div>จำนวนข่าวอาชญากรรม: {selectedFeature.crime_rate}</div>
              </div>
            )}
          </div>

          {isShow && (
            <GeoJSON data={data} style={style} onEachFeature={onEachFeature} />
          )}

          <div
            className="absolute bottom-5 left-10 bg-white p-4 rounded-md shadow-md w-70  text-base"
            style={{ zIndex: 999 }}
          >
            <div style={{ fontFamily: "Kanit" }} className="legend">
              <div style={{ "--color": "#800026" }}>มีข่าวเกิดขึ้นมาก</div>
              <div style={{ "--color": "#BD0026" }}>
                มีข่าวเกิดขึ้นค่อนข้างมาก
              </div>
              <div style={{ "--color": "#FD8D3C" }}>ปกติ</div>
              <div style={{ "--color": "#a6d96a" }}>
                มีข่าวเกิดขึ้นค่อนข้างน้อย
              </div>
              <div style={{ "--color": "#198754" }}>มีข่าวเกิดขึ้นน้อย</div>
            </div>
          </div>
          <div
            className="absolute bottom-5 right-10 bg-white p-4 rounded-md w-60 shadow-md text-base"
            style={{ zIndex: 999 }}
          >
            {selectedFeature == null ? (
              <div style={{ fontFamily: "Kanit" }}>
                <strong>Crimino Meter</strong> <br />
                <span>
                  เลื่อนเมาส์ไปที่แต่ละจังหวัดเพื่อดูอัตราความรุนแรงของแต่ละจังหวัดคิดเป็นเปอร์เซ็น
                </span>
              </div>
            ) : (
              <div style={{ fontFamily: "Kanit" }}>
                <strong>
                  Crimino Meter
                  <br /> {selectedFeature.name_th}
                </strong>{" "}
                <br />
                <br />
                <GaugeChart
                  id="gauge-chart3"
                  nrOfLevels={5}
                  colors={[
                    "#198754",
                    "#a6d96a",
                    "#FD8D3C",
                    "#BD0026",
                    "#800026",
                  ]}
                  arcWidth={0.3}
                  percent={selectedFeature.crime_meter / 10}
                  textColor={"black"}
                  // hideText={true} // If you want to hide the text
                />
              </div>
            )}
          </div>
        </MapContainer>
      </div>
    </div>
  );
}
