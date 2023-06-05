import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavMenu from "../../NavMenu/NavMenu";

const Layout = () => {
  return (
    <div>
      <NavMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
