import React from "react";
import styles from "./InputSearch.module.css";

const InputSearch = () => {
  return (
    <div className={styles.parentBlock_search}>
      <input placeholder="Книга, жанры, автор" className={styles.inputSearch} />
      <button>Поиск</button>
    </div>
  );
};

export default InputSearch;
