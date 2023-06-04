import React, { useEffect } from "react";
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
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default WritersSlider;
