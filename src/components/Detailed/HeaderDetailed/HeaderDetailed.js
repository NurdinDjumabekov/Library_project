import React from "react";
import styles from "./HeaderDetailed.module.css";
import book from "../../../assests/images/Detailed/info_book.png";

const HeaderDetailed = ({ dataDetailedPage }) => {
  return (
    <div className={styles.parent_deaderDetailed}>
      <div className="container">
        <div className={styles.child_detailed}>
          <div className={styles.child_img_detailed}>
            <img src={dataDetailedPage.cover} alt="book" />
          </div>
          <ul className={styles.child_info_detailed}>
            <li>
              <h3>Название книги</h3>
              <span>{dataDetailedPage.title}</span>
            </li>
            <li>
              <h3>Автор</h3>
              <span>{dataDetailedPage.author_name}</span>
            </li>
            <li>
              <h3>Год публикации</h3>
              <span>1962</span>
            </li>
            <li>
              <h3>Жанр</h3>
              <>
                {dataDetailedPage.genre?.map((i, index) => (
                  <span key={index}>{i.genre_name}</span>
                ))}
              </>
            </li>
            <li>
              <h3>Рейтинг</h3>
              <span>
                {/* <p></p> */}
                <p>{dataDetailedPage.middle_star}</p>
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
