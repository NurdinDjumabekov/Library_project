import React from "react";
import styles from "./InputSearch.module.css";

const InputSearch = () => {
  return (
    <div className={styles.parentBlock_search}>
      <input placeholder="Поиск" />
    </div>
  );
};

export default InputSearch;
