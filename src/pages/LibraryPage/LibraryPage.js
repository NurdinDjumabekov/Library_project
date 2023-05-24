import React from "react";
import styles from "./LibraryPage.module.css";
import books from "../../assests/images/library/books.png";
import InputSearch from "../../components/InputSearch/InputSearch";
import KyrgyzWriters from "../../components/KyrgyzWriters/KyrgyzWriters";
import { TheBestWorks } from "../../components/TheBestWorks/TheBestWorks";
import Novelties from "../../components/Novelties/Novelties";
import { AboutManas } from "../../components/AboutManas/AboutManas";

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
      <TheBestWorks />
      <Novelties />
      <AboutManas />
      <KyrgyzWriters />
    </div>
  );
};

export default LibraryPage;
