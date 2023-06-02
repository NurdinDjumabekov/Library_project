import React, { useEffect } from "react";
import styles from "./Novelties.module.css";
import { requestBestWorks } from "../../store/reducers/sendRequestLibraryPageSlice";
import { useDispatch, useSelector } from "react-redux";
import GradeRetingHeart from "../GradeRetingHeart/GradeRetingHeart";

const Novelties = () => {
  const { dataBestWork } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestBestWorks());
  }, []);

  return (
    <div className="container">
      <div className={styles.parent_noveltyWork}>
        <div className="standart_headers">
          <h4 className="standart_headers_h4">Н</h4>
          <span className="standart_headers_span">овинки</span>
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
                <img src={book.url} alt="book.url" />
              </div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <section>
                <GradeRetingHeart grade={book.grade} />
              </section>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Novelties;
