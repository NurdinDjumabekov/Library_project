import React from "react";
import SliderRecommBlock from "./SliderRecommBlock/SliderRecommBlock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Sliders_recomm.module.css";

const Sliders_recomm = () => {
  const recommendPosts = [
    {
      name: "Название книги",
      discription:
        "«Плаха» - это роман советского писателя Чингиза Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих корней",
      id: 1,
    },
    {
      name: "Название книги",
      discription:
        "«Плаха» - это роман советского писателя Чингиза Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих корней",
      id: 2,
    },
    {
      name: "Название книги",
      discription:
        "«Плаха» - это роман советского писателя Чингиза Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих корней",
      id: 3,
    },
    {
      name: "Название книги",
      discription:
        "«Плаха» - это роман советского писателя Чингиза Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих корней",
      id: 4,
    },
  ];
  const settings = {
    dots: false,
    buttuns: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {recommendPosts.map((slide) => (
          <SliderRecommBlock slide={slide} key={slide.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Sliders_recomm;
