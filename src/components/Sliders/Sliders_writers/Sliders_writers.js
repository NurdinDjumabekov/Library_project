import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Sliders_writers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { requestKyrgyzWriters } from "../../../store/reducers/sendRequestMainPageSlice";

const Sliders_writers = () => {
  const dispatch = useDispatch();
  const { kyrgyzWriters } = useSelector(
    (state) => state.sendRequestMainPageSlice
  );
  // console.log(kyrgyzWriters, "kyrgyzWriters");

  useEffect(() => {
    dispatch(requestKyrgyzWriters());
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.parent_writers}>
      <div className="container">
        <div className={styles.child_writers}>
          <div className={styles.parent_sliderWriters}>
            <Slider className={styles.slider} {...settings}>
              {kyrgyzWriters?.map((slide) => (
                <div key={slide.id}>
                  <h3>{slide.fullname}</h3>
                  <div className={styles.child_sliderWriters}>
                    <div>
                      <img src={slide.image} alt="slide" />
                    </div>
                    <section className={styles.moreText_Slider}>
                      <div>
                        <h4>Краткая история: </h4>
                        <p>{slide.short_story}</p>
                      </div>
                      <div>
                        <h4>Награды: </h4>
                        <p>{slide.awards}</p>
                      </div>
                      <div>
                        <h4>Произведения: </h4>
                        {/* <p>{slide.works[0].title}</p> */}
                        {slide?.works?.map((item, index) => (
                          <span key={index}>{item.title}</span>
                        ))}
                      </div>
                    </section>
                  </div>
                  <div className={styles.block_for_btnSlider}>
                    <button>Подробнее</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders_writers;
