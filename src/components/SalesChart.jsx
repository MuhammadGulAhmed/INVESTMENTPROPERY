import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function SalesChart() {

    
const data = [
  { name: 'Jan', earning: 10000 },
  { name: 'Feb', earning: 12000 },
  { name: 'Mar', earning: 14000 },
  { name: 'Apr', earning: 25000 },
  { name: 'May', earning: 18000 },
  { name: 'Jun', earning: 16000 },
];


  return (
     <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Sales Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="earning" stroke="#4f46e5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesChart