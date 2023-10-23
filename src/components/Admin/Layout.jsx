import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div class="bg-gray-100 font-family-karla flex">
      <Sidebar />
      <div class="w-full flex flex-col h-screen overflow-y-hidden">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
