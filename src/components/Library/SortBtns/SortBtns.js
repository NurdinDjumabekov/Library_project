import React, { useEffect, useState } from "react";
import styles from "./SortBtns.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSortBtn,
  requestSortBtn,
} from "../../../store/reducers/sendRequestLibraryPageSlice";

const SortBtns = () => {
  const [sortState, setSortState] = useState(1);
  const { allsortBtn, sortBtn } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );
  // console.log(allsortBtn, "allsortBtn");
  // console.log(sortBtn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestSortBtn());
  }, []);

  const changeSortBtnFn = (id, extra_name) => {
    setSortState(id);
    dispatch(
      changeSortBtn(`
    https://kitepkana1.pythonanywhere.com/search_filter/?genre__genre_name=${extra_name}
    `)
    );
  };

  return (
    <div className={styles.parent_SortBtns}>
      {allsortBtn.length !== 0 ? (
        <>
          {allsortBtn?.map((choice) => (
            <button
              key={choice.id}
              onClick={() => changeSortBtnFn(choice.id, choice.extra_name)}
              className={choice.id === sortState ? styles.active_sort : ""}
            >
              {choice.genre_name}
            </button>
          ))}
        </>
      ) : (
        <button className={styles.active_sort}>Все</button>
      )}
    </div>
  );
};

export default SortBtns;
