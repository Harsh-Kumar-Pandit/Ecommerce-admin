import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboards from "./pages/Dashboards";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Admin from "./pages/Admin";
import CreateAdmin from "./pages/CreateAdmin";
import { useState } from "react";
import Login from "./components/Login";

const App = () => {
  
  const [token, setToken] = useState('');

  return (
    <>
    {token === '' ? <Login/>:<> <Navbar />
      <Sidebar />

      <main className="pt-16 md:ml-64 p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboards />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/admins" element={<Admin />} />
          <Route path="/create-admin" element={<CreateAdmin />} />
        </Routes>
      </main></>}
      
    </>
  );
};

export default App;
