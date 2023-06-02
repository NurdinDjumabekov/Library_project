import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Sliders_writers.module.css";

const Sliders_writers = () => {
  const sliderWriters = [
    {
      id: 1,
      writer: "Чынгыз Айтматов",
      history:
        "Lorem ipsum dolor sit amet consectetur. Turpis ultricies tincidunt lorem aenean nunc sociis diam. Convallis imperdiet cursus nulla ",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu75kQs-UENNytPqqV760OQOeoj-5BqEgqxw&usqp=CAU",
      discription:
        "Aliquet convallis pulvinar vulputate in risus. Luctus mattis maecenas leo risus venenatis libero. Sed dolor venenatis ",
      works: "rdttfygjhuko;pojhiguyftdrghgjhkjlk;pjlhkgujyfhdthfgjhkjlo;lhkgj",
    },
    {
      id: 2,
      writer: "Чынгыз Айтматов",
      history:
        "Lorem ipsum dolor sit amet consectetur. Turpis ultricies tincidunt lorem aenean nunc sociis diam. Convallis imperdiet cursus nulla ",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu75kQs-UENNytPqqV760OQOeoj-5BqEgqxw&usqp=CAU",
      discription:
        "Aliquet convallis pulvinar vulputate in risus. Luctus mattis maecenas leo risus venenatis libero. Sed dolor venenatis ",
      works: "rdttfygjhuko;pojhiguyftdrghgjhkjlk;pjlhkgujyfhdthfgjhkjlo;lhkgj",
    },
    {
      id: 3,
      writer: "Чынгыз Айтматов",
      history:
        "Lorem ipsum dolor sit amet consectetur. Turpis ultricies tincidunt lorem aenean nunc sociis diam. Convallis imperdiet cursus nulla ",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu75kQs-UENNytPqqV760OQOeoj-5BqEgqxw&usqp=CAU",
      discription:
        "Aliquet convallis pulvinar vulputate in risus. Luctus mattis maecenas leo risus venenatis libero. Sed dolor venenatis ",
      works: "rdttfygjhuko;pojhiguyftdrghgjhkjlk;pjlhkgujyfhdthfgjhkjlo;lhkgj",
    },
    {
      id: 4,
      writer: "Чынгыз Айтматов",
      history:
        "Lorem ipsum dolor sit amet consectetur. Turpis ultricies tincidunt lorem aenean nunc sociis diam. Convallis imperdiet cursus nulla ",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu75kQs-UENNytPqqV760OQOeoj-5BqEgqxw&usqp=CAU",
      discription:
        "Aliquet convallis pulvinar vulputate in risus. Luctus mattis maecenas leo risus venenatis libero. Sed dolor venenatis ",
      works: "rdttfygjhuko;pojhiguyftdrghgjhkjlk;pjlhkgujyfhdthfgjhkjlo;lhkgj",
    },
  ];

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

  return (
    <div className={styles.parent_writers}>
      <div className="container">
        <div className={styles.child_writers}>
          {/* <div className={styles.header_text_writers}>
            <span>Ч</span>
            <h2>ингиз Айтматов</h2>
          </div> */}
          <div className={styles.parent_sliderWriters}>
            <Slider className={styles.slider} {...settings}>
              {sliderWriters.map((slide) => (
                <div key={slide.id}>
                  <h3>{slide.writer}</h3>
                  <div className={styles.child_sliderWriters}>
                    <div>
                      <img src={slide.url} alt="slide" />
                    </div>
                    <section className={styles.moreText_Slider}>
                      <div>
                        <h4>Краткая история: </h4>
                        <p>{slide.history}</p>
                      </div>
                      <div>
                        <h4>Награды: </h4>
                        <p>{slide.discription}</p>
                      </div>
                      <div>
                        <h4>Произведения: </h4>
                        <p>{slide.discription}</p>
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
