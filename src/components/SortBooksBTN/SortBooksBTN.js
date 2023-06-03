import React, { useEffect, useState } from "react";
import styles from "./SortBooksBTN.module.css";
import listImg from "../../assests/images/user/list.svg";
import plitaImg from "../../assests/images/user/plita.svg";

const SortBooksBTN = ({updateChoiceFilter,updateViewOfList}) => {
  const sorts = ["Все", "Читаю", "Прочитано", "Брошено"];
  const view = [
    { id: 1, view: "Список", img: listImg },
    { id: 2, view: "Плитка", img: plitaImg },
  ];
  const [choice, setChoice] = useState(0);
  const [viewOfList,setViewOfList] = useState(1);
  useEffect(()=>{
    updateChoiceFilter(sorts[choice]);
    updateViewOfList(viewOfList);
  },[choice,viewOfList])
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
          <button 
            key={item.id} 
            onClick={() => setViewOfList(item.id)}
            className={item.id === viewOfList ? styles.acrive_choice : ""}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <p>{item.view}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortBooksBTN;
