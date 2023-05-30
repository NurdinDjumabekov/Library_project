import React from "react";
import styles from "./MainPage.module.css";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Recommendation from "../../components/Recommendation/Recommendation";
import ManasPart from "../../components/ManasPart/ManasPart";
import Footer from "../../components/Footer/Footer";
import MobileVersion from "../../components/MobileVersion/MobileVersion";
import KyrgyzWriters from "../../components/KyrgyzWriters/KyrgyzWriters";
import Sliders_writers from "../../components/Sliders/Sliders_writers/Sliders_writers";
const MainPage = () => {
  return (
    <div>
      <HeaderMain />
      <Recommendation />
      <ManasPart />
      <Sliders_writers />
    </div>
  );
};

export default MainPage;
