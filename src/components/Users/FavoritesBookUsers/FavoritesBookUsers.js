import React, { useEffect } from "react";
import styles from "./FavoritesBookUsers.module.css";
import { sendRequestFavotitesData } from "../../../store/reducers/usersStateSlice";
import { useDispatch, useSelector } from "react-redux";

const FavoritesBookUsers = () => {
  const dispatch = useDispatch();
  const { dataFavotitesBook } = useSelector((state) => state.usersStateSlice);
  //   console.log(dataFavotitesBook, "dataFavotitesBook");

  useEffect(() => {
    dispatch(sendRequestFavotitesData());
  }, []);

  return (
    <div className={styles.parent_favoritesBook}>
      {dataFavotitesBook.map((book) => (
        <div className={styles.child_favorites} key={book.id}>
          <div className={styles.child_img_favorites}>
            <img src={book.url} alt="url" />
          </div>
          <div className={styles.child_text_favorites}>
            <h4>«{book.title}»</h4>
            <h5>{book.writer}</h5>
            <span>{book.grade}</span>
            <p>
              Данная книга раскрывает Вам, уважаемый читатель, пошаговые
              действия достижения успеха. Поможет понять и осознать, что именно
              для Вас является успехом. Поможет обрести здоровье, любовь,
              финансовую независимость и прочее факторы успешных людей. Советую
              Вам прочесть ее несколько раз,или сделать так.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesBookUsers;
