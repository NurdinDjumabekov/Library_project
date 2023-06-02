import React from "react";
import styles from "./ManasPart.module.css";
import { NavLink } from "react-router-dom";
import manas_left from "../../assests/images/MainPage/ManasPart/manasPart_left.png";
import manas_right from "../../assests/images/MainPage/ManasPart/manasPart_right.png";
import manas_book from "../../assests/images/MainPage/ManasPart/manas_book.png";

const ManasPart = () => {
  return (
    <div className={styles.parent_manasPart}>
      <h4>Манас</h4>
      <div className={styles.child_manasPart}>
        <div className={styles.child_manasPart_left}>
          <img src={manas_left} alt="manas_left" />
        </div>
        <div className={styles.child_manasPart_center}>
          <div>
            <div>
              <img src={manas_book} alt="manas_book" />
            </div>
            <p>
              Начните изучать и читать с легендарного , самого большого в мире
              эпоса - “<span>МАНАС</span>”
            </p>
          </div>
          <button>
            <NavLink to={"/"}>Подробнее</NavLink>
          </button>
        </div>
        <div className={styles.child_manasPart_right}>
          <img src={manas_right} alt="manas_right" />
        </div>
      </div>
    </div>
  );
};

export default ManasPart;
