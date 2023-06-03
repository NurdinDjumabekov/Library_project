import React from "react";
import styles from "./SlidersMainPageInner.module.css";
import postImage from "../../../../assests/images/Sliders/book_slider.png";
import { Link } from "react-router-dom";
import Rating_Star from "../Rating_Star/Rating_Star";

const SlidersMainPageInner = ({ slide }) => {
  return (
    <div className={styles.sliderBlock}>
      <div className={styles.postImage}>
        <img src={postImage} alt="postIMAGE" />
      </div>
      <section>
        <div className={styles.postText}>
          <h2>{slide.title}</h2>
          <p>{slide.writer}</p>
        </div>
        <Rating_Star grade_star={slide.grade_star} grade={slide.grade} />
        <button>
          <Link to={"/"}>Читать</Link>
        </button>
      </section>
    </div>
  );
};

export default SlidersMainPageInner;
