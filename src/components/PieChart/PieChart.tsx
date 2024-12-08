// @ts-nocheck
"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { LineChart, Line } from "recharts";
import { Box } from "@chakra-ui/react";

const data = [
  { name: "Project Salam", value: 40 },
  { name: "Khudi", value: 20 },
  { name: "Ration and Food Drives", value: 20 },
  { name: "Need Based", value: 20 },
];

const COLORS = ["#c05050", "#59c051", "#4f92c0", "#904fc0"];

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

// const data = {
//   labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: 20,
//       backgroundColor: "red",
//     },
//   ],
// };

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DistributionPieChart() {
  return (
    <PieChart width={400} height={400} data={data}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        label={renderCustomizedLabel}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
