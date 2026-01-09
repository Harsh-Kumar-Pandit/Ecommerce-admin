import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    `block rounded-md px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-gray-900 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <>   
      {!open && (
  <button
    onClick={() => setOpen(true)}
    className="fixed left-0 top-20 z-40 rounded-md bg-gray-900 p-2 text-white md:hidden"
  >
    ☰
  </button>
)}

 
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-white p-4 transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <nav className="space-y-1">
          <NavLink to="/admin/dashboard" className={linkClass} onClick={closeSidebar}>
            Dashboard
          </NavLink>

          <NavLink to="/admin/add" className={linkClass} onClick={closeSidebar}>
            Add Products
          </NavLink>

          <NavLink to="/admin/list" className={linkClass} onClick={closeSidebar}>
            List Products
          </NavLink>

          <NavLink to="/admin/orders" className={linkClass} onClick={closeSidebar}>
            Orders
          </NavLink>

          <div className="mt-4 px-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Admin Management
          </div>

          <NavLink to="/admin/admins" className={linkClass} onClick={closeSidebar}>
            Admin List
          </NavLink>

          <NavLink to="/admin/create-admin" className={linkClass} onClick={closeSidebar}>
            Create Admin
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
