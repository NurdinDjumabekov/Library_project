import React, { useState } from "react";
import styles from "./SortBooksBTN.module.css";
import listImg from "../../assests/images/user/list.svg";
import plitaImg from "../../assests/images/user/plita.svg";

const SortBooksBTN = () => {
  const sorts = ["Все", "Читаю", "Прочитано", "Брошено"];
  const view = [
    { id: 1, view: "Список", img: listImg },
    { id: 2, view: "Плитка", img: plitaImg },
  ];
  const [choice, setChoice] = useState(0);
  return (
    <div className={styles.parent_sortBtn}>
      <div className={styles.inner_sortBtn_choice}>
        {sorts.map((sort, index) => (
          <div
            key={index}
            onClick={() => setChoice(index)}
            className={index === choice ? styles.acrive_choice : ""}
          >
            <button>{sort}</button>
          </div>
        ))}
        <p>Вид</p>
      </div>
      <div className={styles.inner_sortBtn_view}>
        {view.map((item) => (
          <section key={item.id}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <p>{item.view}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SortBooksBTN;
