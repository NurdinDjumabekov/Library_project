import React, { useEffect, useState } from "react";
import styles from "./WritersSlider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { requestKyrgyzWriters } from "../../../../store/reducers/sendRequestMainPageSlice";
const WritersSlider = () => {
  const { kyrgyzWriters } = useSelector(
    (state) => state.sendRequestMainPageSlice
  );
  //   console.log(kyrgyzWriters, "kyrgyzWriters");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestKyrgyzWriters());
  }, []);
  //////////////////////////////////////////
  const { coordinatesSlider } = useSelector(
    (state) => state.sendRequestMainPageSlice
  );
  // console.log(coordinatesSlider[0], "coordinatesSlider");
  const [disabledBtn, setDisabledBtn] = useState(false);
  let count = 0;
  const startScroll = (addCoordinates) => {
    setDisabledBtn(true);
    if (count < addCoordinates) {
      setTimeout(() => {
        count = count + 20;
        window.scrollTo({
          top: count,
        });
        // console.log(count);
        startScroll(addCoordinates);
      }, 1);
    }
    setTimeout(() => {
      count = 0;
      setDisabledBtn(false);
    }, 2000);
  };

  //////////////////////////////////////////
  return (
    <div className={styles.parent_ourWriters}>
      <div>
        <h2>
          Наши <span>писатели</span>
        </h2>
      </div>
      <div className="container">
        <div>
          {kyrgyzWriters?.map((man) => (
            <div key={man.id}>
              <div className={styles.inner_img_ourWriters}>
                <img src={man.url} alt="book" />
              </div>
              <div className={styles.inner_text_ourWriters}>
                <h4>{man.writer}</h4>
                <p>{man.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btn_more}>
          <button onClick={() => startScroll(2615)}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default WritersSlider;
