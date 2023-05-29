import React, { useEffect } from "react";
import styles from "./TheBestWorks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { requestBestWorks } from "../../store/reducers/sendRequestLibraryPageSlice";

const TheBestWorks = () => {
  const { dataBestWork } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestBestWorks());
  }, []);
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
        <ul>
          {dataBestWork?.map((book) => (
            <li key={book.id}>
              <div>
                <img src={book.url} alt="" />
              </div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <section></section>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TheBestWorks;
