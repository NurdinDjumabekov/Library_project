import React, { useEffect } from "react";
import styles from "./NoveltiesSlider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { requestNovetlyWorks } from "../../../../store/reducers/sendRequestMainPageSlice";

const NoveltiesSlider = () => {
  const { dataNoveltyWork } = useSelector(
    (state) => state.sendRequestMainPageSlice
  );
  // console.log(dataNoveltyWork, "dataNoveltyWork ");
  const data = [...dataNoveltyWork];
  data.length = 6;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNovetlyWorks());
  }, []);
  return (
    <div className={styles.parent_Novelties}>
      <div>
        <h2>
          Следите за <span>новинками!</span>
        </h2>
      </div>
      <div className="container">
        <div>
          {data?.map((book) => (
            <div key={book.id}>
              <img src={book.url} alt="book" />
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

export default NoveltiesSlider;
