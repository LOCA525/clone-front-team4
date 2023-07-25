import React from "react";
<<<<<<< HEAD:src/components/common/Layout.jsx
import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
=======
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
>>>>>>> 98f35d56886ac05316dd67e750deac5ea2f40adb:src/component/common/Layout.jsx

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
