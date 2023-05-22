import React from "react";
import styles from "./MainPage.module.css";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Recommendation from "../../components/Recommendation/Recommendation";
import ManasPart from "../../components/ManasPart/ManasPart";
import Footer from "../../components/Footer/Footer";
import MobileVersion from "../../components/MobileVersion/MobileVersion";
import Authors from "../../components/Authors/Authors";
const MainPage = () => {
  return (
    <div>
      <HeaderMain />
      <Recommendation />
      <ManasPart />
      <Authors />
    </div>
  );
};

export default MainPage;
