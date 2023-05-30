import React from "react";
import styles from "./ManasPart.module.css";
import bookImg from "../../assests/images/MainPage/ManasPart/book_manas.png";
import { NavLink } from "react-router-dom";

const ManasPart = () => {
  return (
    <div className={styles.parent_manasPart}>
      <div className={styles.parent_manasPart_shadow}>
        <div className="container">
          <div className={styles.child_manasPart}>
            <div className={styles.child_manasPart_left}>
              <img src={bookImg} alt="book" />
            </div>
            <div className={styles.child_manasPart_right}>
              <h3>Открой для себя Великий Эпос</h3>
              <NavLink>Начните с первой страницы</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManasPart;
