import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TheBestWorksSlider.module.css";
import { requestKyrgyzWriters } from "../../../../store/reducers/sendRequestMainPageSlice";

const TheBestWorksSlider = () => {
  const { dataBestWork } = useSelector(
    (state) => state.sendRequestMainPageSlice
  );
  //   console.log(dataBestWork, "dataBestWork");
  const data = [...dataBestWork];
  data.length = 3;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestKyrgyzWriters());
  }, []);
  return (
    <div className={styles.parent_bestWork}>
      <div>
        <h2>
          Лучшие <span>произведения</span>
        </h2>
      </div>
      <div className="container">
        <div>
          {data?.map((book) => (
            <div key={book.id}>
              <div className={styles.inner_img_ourWriters}>
                <img src={book.url} alt="book" />
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

export default TheBestWorksSlider;
