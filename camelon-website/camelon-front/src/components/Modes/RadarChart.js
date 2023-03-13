import React from "react";
import Chart from "chart.js/auto";
import { Radar } from 'react-chartjs-2';
import Card from "react-bootstrap/Card";

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

const RadarChart = () => {
  const labels = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      },
    ],
  };
  return (
    <Card style={{width:"50%"}}>
      <Radar data={data} />
    </Card>
  );
};

export default RadarChart;