"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function DaugnutChart() {
  const labels = [
    "Khudi",
    "Project Salam",
    "Need-Based",
    "Ration and Food Drives",
  ];
  const colors = ["#3f6ab8", "#32589a", "#7992cd", "#b3bee0"];
  const chartData = {
    labels,
    datasets: [
      {
        data: [20, 40, 20, 20],
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Doughnut
      width={"360px"}
      height={"360px"}
      data={chartData}
      options={options}
    />
  );
}

export default DaugnutChart;
