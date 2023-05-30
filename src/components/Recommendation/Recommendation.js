import React from "react";
import styles from "./Recommendation.module.css";
import Sliders_recomm from "../Sliders/Sliders_recommendation/Sliders_recomm";

const Recommendation = () => {
  return (
    <div className={styles.parent_recommendation}>
      <div className="container">
        <div className={styles.child_recommendation}>
          <div className={styles.mainText_recommendation}>
            <span>Р</span>
            <h2>екомендуемые книги</h2>
          </div>
          <Sliders_recomm />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
