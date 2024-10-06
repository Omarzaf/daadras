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
  const labels = ["Child Care", "Teaching", "Help", "Exursions", "Feeding"];
  const colors = ["#BEF3C0", "#AC94F1", "#FFF0CA", "#F9CF64", "#F38FBF"];
  const chartData = {
    labels,
    datasets: [
      {
        data: [40, 35, 10, 10, 5],
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
