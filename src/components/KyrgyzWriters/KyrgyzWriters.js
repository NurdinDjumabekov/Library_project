import React, { useEffect } from "react";
import styles from "./KyrgyzWriters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { requestKyrgyzWriters } from "../../store/reducers/sendRequestLibraryPageSlice";

const KyrgyzWriters = () => {
  const { kyrgyzWriters } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestKyrgyzWriters());
  }, []);

  // console.log(kyrgyzWriters, "kyrgyzWriters");

  return (
    <div className="container">
      <div className={styles.parent_kyrgyzWriter}>
        <div className="standart_headers">
          <h4 className="standart_headers_h4">К</h4>
          <span className="standart_headers_span">ыргызские писатели</span>
        </div>
        <p className="standart_headers_p_text">
          Lorem ipsum dolor sit amet consectetur. Viverra nunc vulputate
          vestibulum vitae eget tellus bibendum commodo sed. Cursus mauris
          bibendum nulla porta volutpat.
        </p>
        <ul>
          {kyrgyzWriters?.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.url} alt="writers" />
              </div>
              <h5>{item.writer}</h5>
              <p>{item.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KyrgyzWriters;
