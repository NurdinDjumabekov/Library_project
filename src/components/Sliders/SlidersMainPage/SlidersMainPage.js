import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlidersMainPage.module.css";
import SlidersMainPageInner from "./SlidersMainPageInner/SlidersMainPageInner";

const SlidersMainPage = ({ data }) => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1030 && window.innerWidth >= 780) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesToShow]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
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
