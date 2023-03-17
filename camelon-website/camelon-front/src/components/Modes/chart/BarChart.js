import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const BarChart = (props) => {
  const [crimeData, setCrimeData] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const { year } = props;

  const getdataset = () => {
    const options = {
      params: {
        year: year,
      },
    };
    Axios.get("http://localhost:3001/crimecount", options)
      .then((response) => {
        setCrimeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setIsShow(false);
    getdataset();
  }, [year]);

  useEffect(() => {
    console.log(crimeData);
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "# of Crimes occurences per month",
          data: crimeData.map((crime) => crime.crime_rate),
          backgroundColor: "#44985B",
          borderColor: "#6A717D",
          borderWidth: 1,
        },
      ],
    };
    setDataSet(data);
    setIsShow(true);
  }, [crimeData]);

  return (
    <Card
      style={{
        height: "50%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isShow ? (
        <Bar data={dataSet} />
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      )}
    </Card>
  );
};

export default BarChart;
