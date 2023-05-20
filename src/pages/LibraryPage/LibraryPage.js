import React from "react";
import styles from "./LibraryPage.module.css";
import books from "../../assests/images/library/books.png";
import InputSearch from "../../components/InputSearch/InputSearch";

const LibraryPage = () => {
  return (
    <div>
      <div className={styles.library_header}>
        <div className={styles.library_mainText}>
          <h1>Книга - это уникальная протативная магия</h1>
          <p>Стивен Кинг</p>
          <InputSearch />
        </div>
        <div className={styles.library_mainImg}>
          <img src={books} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default LibraryPage;
