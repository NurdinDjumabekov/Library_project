import React from "react";
import styles from "./DownloadSlide.module.css";
import left from "../../../../assests/images/MainPage/Header/left_phone.png";
import center from "../../../../assests/images/MainPage/Header/center_phone.png";
import right from "../../../../assests/images/MainPage/Header/right_phone.png";

const DownloadSlide = () => {
  return (
    <div className={styles.parent_download}>
      <div className={styles.child_imgs_download}>
        <div>
          <img src={left} alt="left" />
        </div>
        <div>
          <img src={center} alt="center" />
        </div>
        <div>
          <img src={right} alt="right" />
        </div>
      </div>
      <div className={styles.child_text_download}>
        <p>
          <span>Нажмите здесь</span>, чтобы перейти на мобильную версию сайта.
        </p>
        <button>
          <a href="">Скачать</a>
        </button>
      </div>
    </div>
  );
};

export default DownloadSlide;
