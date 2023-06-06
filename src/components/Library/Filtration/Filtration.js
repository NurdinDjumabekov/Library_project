import React, { useState } from "react";
import styles from "./Filtration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStateForFiltered } from "../../../store/reducers/sendRequestLibraryPageSlice";

const Filtration = () => {
  const [filterBook, setFilterBook] = useState(1);
  const dispatch = useDispatch();
  const { stateForFiltered } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );
  //   console.log(stateForFiltered);

  const filteredArr = [
    { id: 1, text: "Все", filt: "all" },
    { id: 2, text: "Популярность", filt: "Популярность" },
    { id: 3, text: "Новинка", filt: "Новинка" },
    { id: 4, text: "Рейтинг", filt: "Рейтинг" },
  ];

  const changeStateFiltered = (id, filter) => {
    dispatch(changeStateForFiltered(filter));
    setFilterBook(id);
  };

  return (
    <div className={styles.parent_filtered}>
      <h4>Фильтр</h4>
      {filteredArr.map((filtered) => (
        <button
          key={filtered.id}
          onClick={() => changeStateFiltered(filtered.id, filterBook.filt)}
          className={filtered.id === filterBook ? styles.active_filtered : ""}
        >
          {filtered.text}
        </button>
      ))}
    </div>
  );
};

export default Filtration;
