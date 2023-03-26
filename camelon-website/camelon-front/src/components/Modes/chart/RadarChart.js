import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import Axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import CamelonApi from "../../../api/CamelonApi";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ data }) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // console.log(data)
  useEffect(() => {
    setIsLoading(true);
    setData1([]);
    setData2([]);
    if (Object.keys(data).length !== 0) {
      setIsFirstLoad(false);
      CamelonApi.get("thairathcrimetypes", {
        params: {
          year: data.year,
        },
      })
        .then((response) => {
          // console.log(response.data)
          setData1(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      CamelonApi.get("dailynewscrimetypes", {
        params: {
          year: data.year,
        },
      })
        .then((response) => {
          // console.log(response.data)
          setData2(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [data]);

  useEffect(() => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text:
            data.year === ""
              ? `Comparing Annual Rates of Different Types of Crime (ทุกปี)`
              : `Comparing Annual Rates of Different Types of Crime (${data.year})`,
        },
      },
    };
    let labels;
    if (data1.length !== 0 && data2.length !== 0) {
      labels = Object.keys(data1[0]);

      var chart_data = {
        labels,
        datasets: [
          {
            label: "Thairath",
            data: Object.values(data1[0]),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Dailynews",
            data: Object.values(data2[0]),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
    }

    setChartData(chart_data);
    setOptions(options);
    if (data1.length !== 0 && data2.length !== 0) {
      setIsLoading(false);
      // console.log(data1.length)
      // console.log(data2.length)
    }
  }, [data1, data2]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {isFirstLoad ? (
        <div style={{ color: "#9c9c9c", fontSize: 14 }}>
          **โปรดเลือกปีเพื่อเเสดงข้อมูล
        </div>
      ) : isLoading ? (
        <div style={{ margin: "25%" }}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : (
        <Radar data={chartData} options={options} />
      )}
    </div>
  );
};

export default RadarChart;
