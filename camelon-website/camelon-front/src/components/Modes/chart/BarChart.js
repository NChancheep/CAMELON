import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const BarChart = ({ year }) => {
  const [crimeData, setCrimeData] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  function LoadingIndicator() {
    return (
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
    );
  }
  useEffect(() => {
    setIsLoading(true);
    Axios.get("http://localhost:3001/crimecount", {
      params: {
        year: year,
      },
    })
      .then((response) => {
        setCrimeData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [year]);

  useEffect(() => {
    if (crimeData.length === 0) {
      return;
    }

    const labels =
      year === "all_year"
        ? crimeData.map((crime) => crime.Year)
        : [
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
          label: "# of Crimes occurrences per month",
          data: crimeData.map((crime) => crime.crime_rate),
          backgroundColor: "#44985B",
          borderColor: "#6A717D",
          borderWidth: 1,
        },
      ],
    };

    setDataSet(data);
    setIsLoading(false);
  }, [crimeData, year]);

  return isLoading ? (
    LoadingIndicator()
  ) : (
    <Card
      style={{
        height: "50%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ThreeDots
            height={80}
            width={80}
            radius={9}
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : (
        <Bar data={dataSet} />
      )}
    </Card>
  );
};

export default BarChart;
