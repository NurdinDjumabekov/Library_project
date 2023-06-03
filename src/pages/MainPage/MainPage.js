import React from "react";
import styles from "./MainPage.module.css";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Recommendation from "../../components/Recommendation/Recommendation";
import ManasPart from "../../components/ManasPart/ManasPart";
import Sliders_writers from "../../components/Sliders/Sliders_writers/Sliders_writers";
import Novelties from "../../components/Novelties/Novelties";
const MainPage = () => {
  return (
    <div>
      <HeaderMain />
      <Recommendation />
      <ManasPart />
      <Novelties />
      <Sliders_writers />
    </div>
  );
};

export default MainPage;
