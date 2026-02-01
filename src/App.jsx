import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboards from "./pages/Dashboards";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(() => {
    localStorage.setItem('token', token)
  },[token])

  useEffect(() => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
}, []);

document.documentElement.classList.toggle("dark");



  return (
    <>
    <ToastContainer/>
    {token === '' ? <Login setToken={setToken}/>:<> <Navbar setToken={setToken}/>
      <Sidebar />

      <main className="pt-16 md:ml-64 p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<Dashboards />} token={token}/>
          <Route path="/admin/add" element={<Add token={token}/>} />
          <Route path="/admin/list" element={<List token={token}/>} />
          <Route path="/admin/orders" element={<Order token={token}/>} />
        </Routes>
      </main></>}
      
    </>
  );
};

export default App;
