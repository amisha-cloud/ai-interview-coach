import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import {
  FiMenu,
  FiHome,
  FiUser,
  FiLogOut,
  FiBarChart2,
  FiSearch,
} from "react-icons/fi";

export default function Dashboard() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const userName = localStorage.getItem("name") || "Candidate";

  const performanceData = [
    { month: "Jan", score: 60 },
    { month: "Feb", score: 70 },
    { month: "Mar", score: 78 },
    { month: "Apr", score: 85 },
  ];

  const stats = [
    {
      title: "Total Sessions",
      value: "32",
      change: "+14%",
    },
    {
      title: "Avg Confidence",
      value: "84%",
      change: "+6%",
    },
    {
      title: "Communication",
      value: "79%",
      change: "+4%",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <div
        className={`bg-white shadow-xl transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        } p-5`}
      >
        <div className="flex items-center justify-between mb-10">
          {!collapsed && (
            <h2 className="text-xl font-bold text-indigo-600">
              AI Coach
            </h2>
          )}
          <FiMenu
            className="cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>

        <nav className="space-y-6 text-gray-600">
          <div className="flex items-center gap-3 cursor-pointer hover:text-indigo-600">
            <FiHome />
            {!collapsed && <span>Dashboard</span>}
          </div>

          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"
          >
            <FiBarChart2 />
            {!collapsed && <span>Start Interview</span>}
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-indigo-600">
            <FiUser />
            {!collapsed && <span>Profile</span>}
          </div>

          <div
            onClick={() => navigate("/login")}
            className="flex items-center gap-3 cursor-pointer text-red-500 hover:text-red-600"
          >
            <FiLogOut />
            {!collapsed && <span>Logout</span>}
          </div>
        </nav>
      </div>

      {/* MAIN SECTION */}
      <div className="flex-1 p-8">

        {/* TOPBAR */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-2xl font-semibold">
              Welcome back, {userName} 👋
            </h1>
            <p className="text-gray-500 text-sm">
              Track your AI interview performance
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <FiSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="bg-white px-4 py-2 rounded-xl shadow text-sm cursor-pointer">
              👤 {userName}
            </div>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
              <span className="text-green-500 text-sm font-medium">
                {stat.change} this month
              </span>
            </motion.div>
          ))}
        </div>

        {/* CHART + SUMMARY */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">

          {/* PERFORMANCE CHART */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              Performance Overview
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#6366F1"
                  fillOpacity={1}
                  fill="url(#colorScore)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* SUMMARY PANEL */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              Performance Summary
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Technical Skills</span>
                <span>88%</span>
              </div>
              <div className="flex justify-between">
                <span>Communication</span>
                <span>79%</span>
              </div>
              <div className="flex justify-between">
                <span>Confidence</span>
                <span>84%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            Recent Activity
          </h3>

          <div className="space-y-5 text-sm">
            <div className="flex justify-between">
              <span>Completed React Interview</span>
              <span className="text-green-500">+82%</span>
            </div>
            <div className="flex justify-between">
              <span>Improved Confidence</span>
              <span className="text-green-500">+6%</span>
            </div>
            <div className="flex justify-between">
              <span>Mock HR Round</span>
              <span className="text-green-500">+76%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
