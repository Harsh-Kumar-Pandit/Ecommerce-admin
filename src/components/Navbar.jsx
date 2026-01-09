import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = () => {
  return (
    <nav className="relative flex h-16 items-center border-b bg-white px-6">
      <img
        src={assets.logo}
        alt="Logo"
        className="h-13 w-auto"
      />

      <span className="absolute left-1/2 -translate-x-1/2 text-lg font-bold tracking-wide text-gray-900">
        ADMIN PANEL
      </span>

      <button className="ml-auto rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
