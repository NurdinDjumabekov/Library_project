import React from "react";
import styles from "./Recommendation.module.css";
import Sliders_recomm from "../Sliders/Sliders_recommendation/Sliders_recomm";

const Recommendation = () => {
  const recommendPosts = [
    {
      name: "Название книги",
      discription: "«Плаха» - это роман советского писателя Чингиза Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих корней",
      id: 1
    },
    {
      name: "Название книги",
      discription: "«Плаха» - это роман советского писателя Чингиза Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих корней",
      id: 1
    },
    {
      name: "Название книги",
      discription: "«Плаха» - это роман советского писателя Чингиза Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих корней",
      id: 1
    },
    {
      name: "Название книги",
      discription: "«Плаха» - это роман советского писателя Чингиза Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих корней",
      id: 1
    }
  ]
  return (
    <div className={styles.parent_recommendation}>
      <div className="container">
        <div className={styles.child_recommendation}>
          <div className={styles.mainText_recommendation}>
            <span>Р</span>
            <h2>екомендуемые книги</h2>
          </div>
          <Sliders_recomm postsList={recommendPosts} slidesToShow={2}/>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
