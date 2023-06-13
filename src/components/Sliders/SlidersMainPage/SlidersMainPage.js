import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlidersMainPage.module.css";
import SlidersMainPageInner from "./SlidersMainPageInner/SlidersMainPageInner";
// import SliderRecommBlock from "../Sliders_recommendation/SliderRecommBlock/SliderRecommBlock";

const SlidersMainPage = ({ data }) => {
  const settings = {
    dots: false,
    buttuns: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {data?.map((slide) => (
          <SlidersMainPageInner slide={slide} key={slide.id} />
        ))}
      </Slider>
    </div>
  );
};

export default SlidersMainPage;
