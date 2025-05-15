import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const investmentData = [
  { date: "10 Aug", value: 400 },
  { date: "11 Aug", value: 480 },
  { date: "12 Aug", value: 500 },
  { date: "13 Aug", value: 470 },
  { date: "14 Aug", value: 450 },
  { date: "15 Aug", value: 520 },
];

const lossData = [
  { date: "10 Aug", value: 300 },
  { date: "11 Aug", value: 350 },
  { date: "12 Aug", value: 320 },
  { date: "13 Aug", value: 310 },
  { date: "14 Aug", value: 300 },
  { date: "15 Aug", value: 330 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border px-3 py-1 rounded shadow">
        <p>${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export default function InvestmentChart({ activeTab = "Investment" }) {
  const data = activeTab === "Investment" ? investmentData : lossData;

  return (
    <div className="w-full p-6 rounded-xl shadow bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Status</h2>
        <span className="text-sm text-gray-500">{activeTab} · This month</span>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00B86B"
            strokeWidth={3}
            dot={{ r: 6, fill: "#fff", stroke: "#00B86B", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
