import React from "react";
import styles from "./SliderRecommBlock.module.css";
import postImage from "../../../../assests/images/Sliders/book_slider.png";
import { Link } from "react-router-dom";

const SliderRecommBlock = ({ slide }) => {
  return (
    <div className={styles.sliderBlock}>
      <div className={styles.postImage}>
        <div>
          <div>
            <img src={postImage} alt="postIMAGE" />
          </div>
        </div>
      </div>
      <div className={styles.postText}>
        <div>
          <h2>{slide.name}</h2>
        </div>
        <p>{slide.discription}</p>
      </div>
      <Link to={"/"} className={styles.continueRead}>
        Читать дальше
      </Link>
    </div>
  );
};

export default SliderRecommBlock;
