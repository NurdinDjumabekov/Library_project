import React, { useEffect } from "react";
import styles from "./TheBestWorks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { requestBestWorks } from "../../store/reducers/sendRequestLibraryPageSlice";
import GradeRetingHeart from "../GradeRetingHeart/GradeRetingHeart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TheBestWorks = () => {
  const { dataBestWork } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestBestWorks());
  }, []);
  const settings = {
    dots: false,
    buttuns: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  //   console.log(dataBestWork, "dataBestWork");
  return (
    <div className="container">
      <div className={styles.parent_bestWork}>
        <div className="standart_headers">
          <h4 className="standart_headers_h4">Л</h4>
          <span className="standart_headers_span">учшие произведения</span>
        </div>
        <p className="standart_headers_p_text">
          Lorem ipsum dolor sit amet consectetur. Viverra nunc vulputate
          vestibulum vitae eget tellus bibendum commodo sed. Cursus mauris
          bibendum nulla porta volutpat.
        </p>
        <div className={styles.child_bestWork}>
          {/* <Slider {...settings}> */}
          {/* <ul> */}
          {dataBestWork?.map((book) => (
            <div className={styles.inner_bestWork} key={book.id}>
              <div>
                <img src={book.url} alt="book" />
              </div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <section>
                <GradeRetingHeart grade={book.grade} />
              </section>
            </div>
          ))}
          {/* </ul> */}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default TheBestWorks;
