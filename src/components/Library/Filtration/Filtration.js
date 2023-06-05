import React from "react";
import styles from "./Filtration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStateForFiltered } from "../../../store/reducers/sendRequestLibraryPageSlice";

const Filtration = () => {
  const { stateForFiltered } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );
  const dispatch = useDispatch();
  //   console.log(stateForFiltered);
  return (
    <div className={styles.parent_filtered}>
      <h4>Фильтр</h4>
      <button onClick={() => dispatch(changeStateForFiltered("все"))}>
        Все
      </button>
      <button onClick={() => dispatch(changeStateForFiltered("Популярность"))}>
        По популярности
      </button>
      <button onClick={() => dispatch(changeStateForFiltered("Новинка"))}>
        По новизне
      </button>
      <button onClick={() => dispatch(changeStateForFiltered("Рейтинг"))}>
        По рейтингу
      </button>
    </div>
  );
};

export default Filtration;
