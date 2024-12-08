"use client";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Project Salam", value: 40 },
  { name: "Khudi", value: 20 },
  { name: "Ration and Food Drives", value: 20 },
  { name: "Need Based", value: 20 },
];

const COLORS = ["#c05050", "#59c051", "#4f92c0", "#904fc0"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
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
