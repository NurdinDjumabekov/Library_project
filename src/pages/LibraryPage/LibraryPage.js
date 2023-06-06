import React, { useEffect } from "react";
import styles from "./LibraryPage.module.css";
import InputSearch from "../../components/Library/InputSearch/InputSearch";
import Filtration from "../../components/Library/Filtration/Filtration";
import { requestAllData } from "../../store/reducers/sendRequestLibraryPageSlice";
import { useDispatch, useSelector } from "react-redux";
import InfoEveryBook from "../../components/Library/InfoEveryBook/InfoEveryBook";
import SortBtns from "../../components/Library/SortBtns/SortBtns";

const LibraryPage = () => {
  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.sendRequestLibraryPageSlice);
  useEffect(() => {
    dispatch(requestAllData());
  }, []);
  return (
    <div className={styles.library_parentBlock}>
      <div className="container">
        <InputSearch />
        <div className={styles.library_childBlock}>
          <div className={styles.library_info}>
            <Filtration />
            <div className={styles.library_mainContent}>
              {allData?.map((book) => (
                <InfoEveryBook book={book} key={book.id} />
              ))}
            </div>
          </div>
          <div className={styles.library_sortBlock}>
            <h5>По жанрам</h5>
            <SortBtns />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
