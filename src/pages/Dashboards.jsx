import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import backendUrl from "../../config/api";

const Dashboards = ({token}) => {
  const [stats, setStats] = useState({
    totalOrders: "--",
    totalRevenue: "--",
    totalUsers: "--",
    totalProducts: "--",
  });

  const [range, setRange] = useState(7);
  const [chartData, setChartData] = useState([]);
  const [loadingChart, setLoadingChart] = useState(true);


  /* DASHBOARD STATS */
  useEffect(() => {
    const fetchStats = async () => {
      try {
        if(!token){
          return
        }

        const res = await axios.get(
          backendUrl + "/api/admin/dashboard",
          {
            headers: { token },
          }
        );

        if (res.data.success) {
          setStats(res.data.stats);
        }
      } catch (err) {
        console.error("Dashboard stats error:", err);
      }
    };

    fetchStats();
  }, [token]);

  /*REVENUE CHART*/
  useEffect(() => {
  if (!token) return;

  const fetchRevenue = async () => {
    try {
      setLoadingChart(true);

      const res = await axios.get(
        backendUrl + `/api/admin/revenue?days=${range}`,
        { headers: { token } }
      );

      setChartData(res.data.success ? res.data.data : []);
    } catch (err) {
      console.error("Revenue chart error:", err);
      setChartData([]);
    } finally {
      setLoadingChart(false);
    }
  };

  fetchRevenue();
}, [range, token]);

  return (
    <div className="min-h-screen bg-gray-100 -mt-7.5 ">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      {/*  STATS CARDS  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Orders" value={stats.totalOrders} />
        <StatCard title="Total Revenue" value={stats.totalRevenue} />
        <StatCard title="Total Users" value={stats.totalUsers} />
        <StatCard title="Total Products" value={stats.totalProducts} />
      </div>

      {/*  REVENUE OVERVIEW  */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Revenue Overview</h2>

          <select
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value={7}>Last 7 Days</option>
            <option value={30}>Last 30 Days</option>
            <option value={90}>Last 90 Days</option>
          </select>
        </div>

        <div className="h-80">
          {loadingChart ? (
            <div className="h-full flex items-center justify-center text-gray-400">
              Loading revenue data...
            </div>
          ) : chartData.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-400">
              No revenue data for selected period
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

/*  STAT CARD COMPONENT  */
const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
};

export default Dashboards;
