import React from "react";
import styles from "./MainPage.module.css";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Recommendation from "../../components/Recommendation/Recommendation";
import ManasPart from "../../components/ManasPart/ManasPart";
<<<<<<< HEAD
import Footer from "../../components/Footer/Footer";
import AuthorsRecommendation from "../../components/AuthorsRecommendation/AuthorsRecommendation";
=======
import Sliders_writers from "../../components/Sliders/Sliders_writers/Sliders_writers";
>>>>>>> 70b41f4c2c5cff2fc64c502f11383936a2e09725
const MainPage = () => {
  return (
    <div>
      <HeaderMain />
      <Recommendation />
      <ManasPart />
<<<<<<< HEAD
      <AuthorsRecommendation/>
=======
      <Sliders_writers />
>>>>>>> 70b41f4c2c5cff2fc64c502f11383936a2e09725
    </div>
  );
};

export default MainPage;
