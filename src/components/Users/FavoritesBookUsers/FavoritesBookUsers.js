import React, { useEffect } from "react";
import styles from "./FavoritesBookUsers.module.css";
import { NavLink } from "react-router-dom";

const FavoritesBookUsers = ({ dataFavotitesBook }) => {
  const imgUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElk-8lPtgyWs2nXF9jDL-kw4KXYvZh5eeIQ&usqp=CAU`;
  return (
    <div className={styles.parent_favoritesBook}>
      {dataFavotitesBook.length !== 0 ? (
        <>
          {dataFavotitesBook?.map((book) => (
            <div key={book.id}>
              <NavLink to={"/"}>
                <div className={styles.child_favorites}>
                  <div className={styles.child_img_favorites}>
                    {/* <img src={book?.book_cover} alt="url" /> */}
                    <img src={imgUrl} alt="url" />
                  </div>
                  <div className={styles.child_text_favorites}>
                    <h4>«{book?.book_title}»</h4>
                    <h5>{book.writer}</h5>
                    <span>{book.grade}</span>
                    <p>
                      Данная книга раскрывает Вам, уважаемый читатель, пошаговые
                      действия достижения успеха. Поможет понять и осознать, что
                      именно для Вас является успехом. Поможет обрести здоровье,
                      любовь, финансовую независимость и прочее факторы успешных
                      людей. Советую Вам прочесть ее несколько раз,или сделать
                      так.
                    </p>
                  </div>
                </div>
              </NavLink>
              <div className={styles.changeBtnAction}>
                <button>rtdtfygjhukij</button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className={styles.empty_block}>
          <div>
            <h2>Ничего не найдено</h2>
            <p>Ваш список пустой</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesBookUsers;
