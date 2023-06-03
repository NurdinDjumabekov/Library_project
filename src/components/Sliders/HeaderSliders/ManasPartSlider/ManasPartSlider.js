import React from "react";
import styles from "./ManasPartSlider.module.css";
import manas from "../../../../assests/images/MainPage/ManasPart/manasPart_left.png";

const ManasPartSlider = () => {
  return (
    <div className={styles.parent_sliderManas}>
      <div>
        <h3>
          Эпос <span>МАНАС</span>
        </h3>
      </div>
      <div className={styles.child_sliderManas}>
        <div>
          <img src={manas} alt="#" />
        </div>
        <div>
          <p>
            Читайте вместе с <span>Muras</span> самый большой в мире Эпос
          </p>
        </div>
      </div>
      <div className={styles.btn_more}>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default ManasPartSlider;
