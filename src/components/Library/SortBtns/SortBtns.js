import React, { useState } from "react";
import styles from "./SortBtns.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeSortBtn } from "../../../store/reducers/sendRequestLibraryPageSlice";

const SortBtns = () => {
  const [sortState, setSortState] = useState(1);
  const dispatch = useDispatch();

  const sortArr = [
    { id: 1, text: "Все", sort: "all" },
    { id: 2, text: "Драма", sort: "Драма" },
    { id: 3, text: "Эпосы", sort: "Эпосы" },
    { id: 4, text: "Роман", sort: "Роман" },
    { id: 5, text: "Мифы", sort: "Мифы" },
    { id: 6, text: "Повесть", sort: "Повесть" },
  ];

  const changeSortBtnFn = (id, sort) => {
    setSortState(id);
    dispatch(changeSortBtn(sort));
  };

  return (
    <div className={styles.parent_SortBtns}>
      {sortArr.map((choice) => (
        <button
          key={choice.id}
          onClick={() => changeSortBtnFn(choice.id, choice.sort)}
          className={choice.id === sortState ? styles.active_sort : ""}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default SortBtns;
