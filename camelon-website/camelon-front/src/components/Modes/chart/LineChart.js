import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ThreeDots } from "react-loader-spinner";

import CamelonApi from "../../../api/CamelonApi";

const LineChart = ({ data }) => {
  console.log(data)
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
      if (data.newsSource === 'Thairath') {
        CamelonApi.get(`thairath_crimes_summary?yearStart=${data.startYear}&yearEnd=${data.endYear}`)
        .then((response) => {
          // console.log(response.data)
          setData1(response.data);
        })
        .catch((error) => {
          console.error(error);
        });


      } else {
        CamelonApi.get(`dailynews_crimes_summary?yearStart=${data.startYear}&yearEnd=${data.endYear}`)
        .then((response) => {
          // console.log(response.data)
          setData1(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      }
      

     
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
            data.crimeType === ""
              ? `Crime Incidents Covered in the News (${data.startYear}-${data.endYear})`
              : `${data.crimeType} Crime Incidents Covered in the News (${data.startYear}-${data.endYear})`,
        },
      },
    };

    const labels = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม' , 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    let chart_data = {
      labels,
      datasets: [
        {
          label: data.newsSource,
          data: data1.map((data) => data.Numbers),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        // {
        //   label: "Dailynews",
        //   data: data2.map((data) => data.Numbers),
        //   borderColor: "rgb(53, 162, 235)",
        //   backgroundColor: "rgba(53, 162, 235, 0.5)",
        // },
      ],
    };
    setChartData(chart_data);
    setOptions(options);
    if (data1.length !== 0) {
      setIsLoading(false);
      // console.log(data1.length)
      // console.log(data2.length)
    }
  }, [data.crimeType, data.endYear, data.startYear, data1, data2]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // height: "100%",
      }}
    >
      {isFirstLoad ? (
        <div style={{ color: "#9c9c9c", fontSize: 14, marginTop: "3%" }}>
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
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default LineChart;
