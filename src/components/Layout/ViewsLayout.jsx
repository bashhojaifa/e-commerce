import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../home/Footer/Footer";
import Header from "../home/Header/Header";

const ViewsLayout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ViewsLayout;
