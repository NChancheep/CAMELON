import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Card from "react-bootstrap/Card";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#44985B",
        borderColor: "#6A717D",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <Card style={{height:"50%"}}>
      <Bar data={data} />
    </Card>
  );
};

export default BarChart;
