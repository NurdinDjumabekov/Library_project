import React from "react";
import styles from "./SliderRecommBlock.module.css"
import postImageForDouble from "../../../../assests/images/MainPage/recommendation/test_img.png"
import postImageForSingle from "../../../../assests/images/MainPage/recommendation/chingiz-aitmatov.png"

import { Link } from "react-router-dom";

const SliderRecommBlock= ({postInfo, slidesToShow}) => {
  if(slidesToShow === 1) {
    return (
      <>
        <div className={styles.mainText_authorRecommendation}>
          <span>{postInfo.name[0]}</span>
          <h2>{postInfo.name.substr(1)}</h2>
        </div>
        <div className={styles.sliderBlockSingle}>
          <div className={styles.postImage}>
            <Link>
              <img src={postImageForSingle} alt="" />
            </Link>
          </div>
          <div className={styles.postText}>
            <div className={styles.textBlockChild}>
              <span>Краткая история;</span>
              <p>{postInfo.description}</p>
            </div>
            <div className={styles.textBlockChild}>
              <span>Награды;</span>
              <p>{postInfo.rewards}</p>
            </div>
            <div className={styles.textBlockChild}>
              <span>Произведения;</span>
              <p>{postInfo.writtedBooks}</p>
            </div>
          </div>
          <Link to={"/"} className={styles.detailedBtn}>Подробнее</Link>
        </div>
      </>
    )
  } else {
    return (
      <div className={styles.sliderBlockDouble}>
        <div className={styles.postImage}>
          <Link to={"/"}>
              <img src={postImageForDouble} alt="postIMAGE" />
          </Link>
        </div>
        <div className={styles.postText}>
          <Link to={"/"}><h2>{postInfo.name}</h2></Link>
          <p>{postInfo.discription}</p>
        </div>
        <Link to={"/"} className={styles.continueRead}>Читать дальше</Link>
      </div>
    )
  }
};

export default SliderRecommBlock;
