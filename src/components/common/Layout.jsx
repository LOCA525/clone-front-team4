import React from "react";
import Navbar from "../../Components/common/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../../Components/common/Header";

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
