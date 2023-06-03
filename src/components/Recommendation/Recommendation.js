import React from "react";
import styles from "./Recommendation.module.css";
import SlidersMainPage from "../Sliders/SlidersMainPage/SlidersMainPage";

const Recommendation = () => {
  const recommendPosts = [
    {
      id: 1,
      title: "Плаха",
      writer: "Чынгыз Айматов",
      grade_star: 2,
      grade: 4.5,
    },
    {
      id: 2,
      title: "Первый учитель",
      writer: "Чынгыз Айматов",
      grade_star: 5,
      grade: 9.5,
    },
    {
      id: 3,
      title: "Материнское поле",
      writer: "Чынгыз Айматов",
      grade_star: 3,
      grade: 6,
    },
    {
      id: 4,
      title: "Ак кеме",
      writer: "Чынгыз Айматов",
      grade_star: 1,
      grade: 8,
    },
  ];
  return (
    <div className={styles.parent_recommendation}>
      <div className="container">
        <div className={styles.child_recommendation}>
          <div className={styles.mainText_recommendation}>
            <h2>Рекомендуемые книги</h2>
          </div>
          <SlidersMainPage data={recommendPosts} />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
