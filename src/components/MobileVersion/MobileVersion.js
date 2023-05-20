import React from "react";
import magicBook from "../../assests/images/MobileVersion/magic_book.png";
import playMarket from "../../assests/images/MobileVersion/marketPlay.png";
import styles from "./MobileVersion.module.css";

const MobileVersion = () => {
  return (
    <div className={styles.version_parentBlock}>
      <div>
        <img src={magicBook} alt="" />
      </div>
      <div>
        <h5>
          Читайте книги великих кыргызских писателей на нашем сайте или скачайте
          приложение “Мурас” в Google Play бесплатно.
        </h5>
        <div>
          <img src={playMarket} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileVersion;
