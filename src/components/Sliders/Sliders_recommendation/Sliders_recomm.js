import React from "react";
import SliderRecommBlock from "./SliderRecommBlock/SliderRecommBlock";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ButtonArrow from "./ButtonArrow";
import styles from "./Sliders_recomm.module.css"

const Sliders_recomm = ({postsList, slidesToShow}) => {
  const settings = {
    dots: false,
    buttuns: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <ButtonArrow classes={styles.prev}/>,
    nextArrow: <ButtonArrow classes={styles.next}/>,
};

  return (
  <div className={styles.slider}>
    <Slider {...settings}>
        {postsList.map(item => <SliderRecommBlock postInfo={item} key={item.id}/>)}
    </Slider>
  </div>
)
};

export default Sliders_recomm;
