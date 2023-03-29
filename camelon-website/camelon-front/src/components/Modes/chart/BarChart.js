import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import CamelonApi from "../../../api/CamelonApi";

const BarChart = ({ data }) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  // console.log(data)
  useEffect(() => {
    setIsLoading(true);
    setData1([]);
    setData2([]);
    if (Object.keys(data).length !== 0) {
      setIsFirstLoad(false);
      CamelonApi.get("thairathCrimesCount", {
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

      CamelonApi.get("dailynewsCrimesCount", {
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
              ? `Monthly Crime News Report (ทุกปี)`
              : `Monthly Crime News Report (${data.year})`,
        },
      },
    };
    let labels = null;
    if (data1.length !== 0 && data2.length !== 0) {
      const newData_thairath = [];
      for (let i = 1; i <= 12; i++) {
        const monthData = data1.find((d) => d.month === i);
        newData_thairath.push(monthData ? monthData.Numbers : 0);
      }

      const newData_dailyNews = [];
      for (let i = 1; i <= 12; i++) {
        const monthData = data2.find((d) => d.month === i);
        newData_dailyNews.push(monthData ? monthData.Numbers : 0);
      }

      // console.log(newData);
      // console.log(data1);
      labels = Object.values(months);

      var chart_data = {
        labels,
        datasets: [
          {
            label: "Thairath",
            data: newData_thairath,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Dailynews",
            data: newData_dailyNews,
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
  }, [data.year, data1, data2, months]);

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
        <div style={{ color: "#9c9c9c", fontSize: 14, marginTop:"3%" }}>
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
        <Bar width={"100%"} data={chartData} options={options} />
      )}
    </div>
  );
};

export default BarChart;
