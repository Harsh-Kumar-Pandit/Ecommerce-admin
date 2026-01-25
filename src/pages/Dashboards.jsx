import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboards = () => {
  const [range, setRange] = useState("7");

  // Dummy graph data
  const data7Days = [
    { day: "Mon", revenue: 1200 },
    { day: "Tue", revenue: 2100 },
    { day: "Wed", revenue: 1800 },
    { day: "Thu", revenue: 2600 },
    { day: "Fri", revenue: 3200 },
    { day: "Sat", revenue: 2800 },
    { day: "Sun", revenue: 3500 },
  ];

  const data30Days = Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    revenue: Math.floor(Math.random() * 4000) + 1000,
  }));

  const data90Days = Array.from({ length: 90 }, (_, i) => ({
    day: `Day ${i + 1}`,
    revenue: Math.floor(Math.random() * 5000) + 1500,
  }));

  const chartData =
    range === "7" ? data7Days : range === "30" ? data30Days : data90Days;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-5 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">128</h2>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold mt-2">₹1,24,500</h2>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-2xl font-bold mt-2">342</h2>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <p className="text-sm text-gray-500">Products</p>
          <h2 className="text-2xl font-bold mt-2">56</h2>
        </div>
      </div>

      {/* GRAPH SECTION */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Revenue Overview</h2>

          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RECENT ORDERS */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Order ID</th>
                <th>User</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">#ORD123</td>
                <td>Rahul</td>
                <td>₹2,499</td>
                <td className="text-green-600">Delivered</td>
                <td>25 Jul 2025</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">#ORD124</td>
                <td>Ankit</td>
                <td>₹1,299</td>
                <td className="text-yellow-600">Shipped</td>
                <td>24 Jul 2025</td>
              </tr>

              <tr>
                <td className="py-2">#ORD125</td>
                <td>Neha</td>
                <td>₹3,999</td>
                <td className="text-red-600">Pending</td>
                <td>23 Jul 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboards;
