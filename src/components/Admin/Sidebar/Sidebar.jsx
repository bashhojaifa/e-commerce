import React from "react";
import { FaTachometerAlt, FaUserAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div class="relative h-screen w-64 hidden md:block shadow-xl">
      <div class="p-2 border-b-2 text-center">
        <Link
          to="/dashboard"
          class="text-xl font-semibold  hover:text-gray-600"
        >
          <h2>BASHAR</h2>
        </Link>
        <p className="text-sm">Admin</p>
      </div>
      <nav class="text-white text-base font-semibold pt-3">
        <NavLink
          to="/dashboard"
          className={`${
            location.pathname === "/dashboard" ? "bg-indigo-100" : ""
          } flex items-center active-nav-link hover:bg-indigo-100 focus:hover:bg-indigo-100  text-gray-600 py-4 pl-6 nav-item`}
        >
          <FaTachometerAlt />
          <span className="ml-3">Dashboard</span>
        </NavLink>
        <NavLink
          to="/users"
          className={`${
            location.pathname === "/users" ? "bg-indigo-100" : ""
          } flex items-center active-nav-link hover:bg-indigo-100 focus:hover:bg-indigo-100  text-gray-600 py-4 pl-6 nav-item`}
        >
          <FaUserAlt />
          <span className="ml-3">User</span>
        </NavLink>
        <NavLink
          to="/orders"
          className={`${
            location.pathname === "/orders" ? "bg-indigo-100" : ""
          } flex items-center active-nav-link hover:bg-indigo-100 focus:hover:bg-indigo-100  text-gray-600 py-4 pl-6 nav-item`}
        >
          <MdOutlineLibraryBooks />
          <span className="ml-3">Orders</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
