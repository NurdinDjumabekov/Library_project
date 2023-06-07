import React from "react";
import styles from "./HeaderDetailed.module.css";
import book from "../../../assests/images/Detailed/info_book.png";

const HeaderDetailed = () => {
  return (
    <div className={styles.parent_deaderDetailed}>
      <div className="container">
        <div className={styles.child_detailed}>
          <div className={styles.child_img_detailed}>
            <img src={book} alt="book" />
          </div>
          <ul className={styles.child_info_detailed}>
            <li>
              <h3>Название книги</h3>
              <span>И Дольше века длится день</span>
            </li>
            <li>
              <h3>Автор</h3>
              <span>Чингиз Айтматов </span>
            </li>
            <li>
              <h3>Год публикации</h3>
              <span>1962</span>
            </li>
            <li>
              <h3>Жанр</h3>
              <span>Роман</span>
            </li>
            <li>
              <h3>Рейтинг</h3>
              <span>
                <p></p>
                <p>4.8</p>
              </span>
            </li>
            <li>
              <button>Читать</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetailed;
