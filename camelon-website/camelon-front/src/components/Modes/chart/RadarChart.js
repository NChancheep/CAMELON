import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import Axios from "axios";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
function getCrimeTypeName(crimeTypeMetadata) {
  switch (crimeTypeMetadata) {
    case "SexualAbuse":
      return "การล่วงละเมิด";
    case "Murder":
      return "ฆาตกรรม";
    case "Gambling":
      return "การพนัน";
    case "Accident":
      return "อุบัติเหตุ";
    case "Theft_Burglary":
      return "ลักทรัพย์";
    case "Battery_Assault":
      return "ทำร้ายร่างกาย";
    case "Drug":
      return "ยาเสพติด";
    default:
      return "อื่นๆ";
  }
}

function convertToSQLDateTime(str) {
  // Convert the string to a Date object
  const dateObj = new Date(str);

  // Extract the date and time components
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const date = dateObj.getDate().toString().padStart(2, '0');
  // const hours = dateObj.getHours().toString().padStart(2, '0');
  // const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  // const seconds = dateObj.getSeconds().toString().padStart(2, '0');

  // Construct the SQL datetime string
  const sqlDateTime = `${year}-${month}-${date}`;

  // Return the SQL datetime string
  return sqlDateTime;
}
export default function RadarChart(props) {
  const { year } = props;
  const [crimeTypeList, setCrimeTypeList] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [dataSet, setDataSet] = useState({});

  const getCrimeType = () => {
    const options = {
      params: {
        year: year,
      }
    };
    Axios.get("http://localhost:3001/crimetypes_count", options)
      .then((response) => {
        setCrimeTypeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {

    getCrimeType();
  
}, [year])

useEffect(() => {

  const labels = crimeTypeList.map((crime) => getCrimeTypeName(crime.crime_type));
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Crimes per 1000 peoples",
        data: crimeTypeList.map((crime) => crime.crime_rate/1000),
        backgroundColor: "#44985B",
        borderColor: "#6A717D",
        borderWidth: 1,
      }
    ]
  }
  setDataSet(data)
  setIsShow(true)


}, [crimeTypeList])


 
return (
  <Card  style={{ width: "100%", backgroundColor: "#faf7f7" }}>
    {isShow && <Radar data={dataSet} />}
  </Card>
);
}
