import React, { useEffect } from "react";
import styles from "./SlidersMainPageInner.module.css";
// import postImage from "../../../../assests/images/Sliders/book_slider.png";
import { Link } from "react-router-dom";
import Rating_Star from "../Rating_Star/Rating_Star";
import { detailedData } from "../../../../store/reducers/sendRequestMainPageSlice";
import { useDispatch } from "react-redux";

const SlidersMainPageInner = ({ slide }) => {
  return (
    <div className={styles.sliderBlock}>
      <div className={styles.postImage}>
        <img src={slide?.cover} alt="postIMAGE" />
      </div>
      <section>
        <div className={styles.postText}>
          <h2>{slide.title}</h2>
          <p>{slide.author_name}</p>
        </div>
        <Rating_Star grade_star={3.5} grade={3.5} />
        <Link to={`/detailed/${slide.id}`}>
          <button>Читать</button>
        </Link>
      </section>
    </div>
  );
};

export default SlidersMainPageInner;
