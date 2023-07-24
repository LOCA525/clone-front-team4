import React from "react";
import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
