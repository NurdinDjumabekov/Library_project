import React from "react";
import styles from "./SortBooksBTN.module.css";

const SortBooksBTN = () => {
  const sorts = ["Все", "Читаю", "Прочитано", "Брошено"];
  return (
    <div className={styles.parent_sortBtn}>
      <div className={styles.inner_sortBtn_choice}>
        {sorts.map((sort) => (
          <div>
            <button>{sort}</button>
          </div>
        ))}
      </div>
      <div className={styles.inner_sortBtn_view}></div>
    </div>
  );
};

export default SortBooksBTN;
