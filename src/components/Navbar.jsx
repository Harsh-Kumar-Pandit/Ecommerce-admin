import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <nav
      className="
        sticky top-0 h-16 flex items-center px-6
       bg-white

        text-gray-900 border-b
      "
    >
      <img src={assets.logo} alt="Logo" className="h-10 w-auto" />

      <div className="mx-auto">
        <span className="text-lg font-bold tracking-wide">
          ADMIN PANEL
        </span>
      </div>

      <button
        onClick={() =>{
          localStorage.removeItem("token");  setToken("")}}
        className="rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
