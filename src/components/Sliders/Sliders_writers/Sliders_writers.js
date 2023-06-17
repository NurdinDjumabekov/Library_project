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
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu75kQs-UENNytPqqV760OQOeoj-5BqEgqxw&usqp=CAU";

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
                      <img src={url} alt="slide" />
                    </div>
                    <section className={styles.moreText_Slider}>
                      <div>
                        <h4>Краткая история: </h4>
                        <p>
                          Родился 12 декабря 1928 г. в посёлке Шекер Таласской
                          области Киргизской ССР в семье учительницы и
                          партийного работника.
                        </p>
                      </div>
                      <div>
                        <h4>Награды: </h4>
                        <p>
                          Герой Социалистического Труда (1978), Герой Киргизской
                          Республики (1997), народный писатель Киргизской ССР
                          (1968), академик АН Киргизской ССР (1974), лауреат
                          Ленинской (1963) и трёх Государственных премий СССР
                          (1968, 1977, 1983).
                        </p>
                      </div>
                      <div>
                        <h4>Произведения: </h4>
                        <p>
                          Материнское поле ,Тополёк мой в красной косынке ,
                          Лицом к лицу Верблюжий глаз , Белый пароход Пегий пёс.
                        </p>
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
