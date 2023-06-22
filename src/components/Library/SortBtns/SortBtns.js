import React, { useEffect, useState } from "react";
import styles from "./SortBtns.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSortBtn,
  requestSortBtn,
} from "../../../store/reducers/sendRequestLibraryPageSlice";

const SortBtns = () => {
  const [sortState, setSortState] = useState(1);
  const { allsortBtn } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );
  // console.log(allsortBtn, "allsortBtn");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestSortBtn());
  }, []);

  // const sortArr = [
  //   { id: 1, text: "Все", sort: "all" },
  //   { id: 2, text: "Драма" },
  //   { id: 3, text: "Эпосы" },
  //   { id: 4, text: "Роман" },
  //   { id: 5, text: "Мифы" },
  //   { id: 6, text: "Повесть" },
  // ];

  const changeSortBtnFn = (id) => {
    setSortState(id);
    dispatch(changeSortBtn(id));
  };

  return (
    <div className={styles.parent_SortBtns}>
      {allsortBtn.length !== 0 ? (
        <>
          {allsortBtn?.map((choice) => (
            <button
              key={choice.id}
              onClick={() => changeSortBtnFn(choice.id)}
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
