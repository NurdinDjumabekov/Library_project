import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavMenu from "../../NavMenu/NavMenu";
import MobileVersion from "../../MobileVersion/MobileVersion";

const Layout = () => {
  return (
    <div>
      <NavMenu />
      <Outlet />
      <MobileVersion />
      <Footer />
    </div>
  );
};

export default Layout;
