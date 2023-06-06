import React, { useState } from "react";
import styles from "./SortUsersBook.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFavoriteBooks } from "../../../store/reducers/usersStateSlice";

const SortUsersBook = () => {
  const { favoriteBooks } = useSelector((state) => state.usersStateSlice);
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState(1);
  //   console.log(favoriteBooks);

  const favoriteBook = [
    { id: 1, text: "Избранное", dataApi: "Избранное" },
    { id: 2, text: "Читаю сейчас", dataApi: "Читаю сейчас" },
    { id: 3, text: "Прочитано", dataApi: "Прочитано" },
  ];

  const sortFavoriteBook = (id, dataApi) => {
    dispatch(changeFavoriteBooks(dataApi));
    setFavorites(id);
  };

  return (
    <div className={styles.parent_sortBook}>
      {favoriteBook.map((item) => (
        <button
          key={item.id}
          onClick={() => sortFavoriteBook(item.id, item.dataApi)}
          className={item.id === favorites ? styles.active_usersBook : ""}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

export default SortUsersBook;
