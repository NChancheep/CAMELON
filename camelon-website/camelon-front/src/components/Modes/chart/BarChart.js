import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import CamelonApi from '../../../api/CamelonApi'

const BarChart = ({ data }) => {
  

   
  return (
    <div>
      {data.year && (data.year)}
    </div>
  )
};

export default BarChart;
