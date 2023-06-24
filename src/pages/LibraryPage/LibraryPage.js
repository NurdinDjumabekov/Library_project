import React, { useEffect, useState } from "react";
import styles from "./LibraryPage.module.css";
import InputSearch from "../../components/Library/InputSearch/InputSearch";
import Filtration from "../../components/Library/Filtration/Filtration";
import { requestAllData } from "../../store/reducers/sendRequestLibraryPageSlice";
import { useDispatch, useSelector } from "react-redux";
import InfoEveryBook from "../../components/Library/InfoEveryBook/InfoEveryBook";
import SortBtns from "../../components/Library/SortBtns/SortBtns";
import Preloader from "../../components/Preloader/Preloader";
import NoData from "../../components/Library/NoData/NoData";
import { sendRequestAllDataUser } from "../../store/reducers/usersStateSlice";

const LibraryPage = () => {
  const dispatch = useDispatch();
  const [restartData, setRestartData] = useState(true);
  const { preloader, allData, search, sortBtn, filteredBtn } = useSelector(
    (state) => state.sendRequestLibraryPageSlice
  );
  const { dataFavotitesBook } = useSelector((state) => state.usersStateSlice);
  console.log(allData, "allData");
  console.log(dataFavotitesBook, "dataFavotitesBook");

  // console.log(data, "dataUSER");

  useEffect(() => {
    dispatch(
      requestAllData({
        search: search,
        sortBtn: sortBtn,
        filteredBtn: filteredBtn,
      })
    );
    // console.log("restart35as1d51as5d15as3d5asDASD5asd5AS");
    dispatch(sendRequestAllDataUser("favorite"));
  }, [search, sortBtn, filteredBtn, restartData]);
  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <div className={styles.library_parentBlock}>
          <div className="container">
            <InputSearch />
            <div className={styles.library_childBlock}>
              <div className={styles.library_info}>
                <Filtration />
                <div className={styles.library_mainContent}>
                  {allData.length === 0 ? (
                    <NoData />
                  ) : (
                    <>
                      {allData.map((book) => {
                        if (
                          dataFavotitesBook?.some(
                            (item) => item?.id === book?.id
                          )
                        ) {
                          return (
                            <InfoEveryBook
                              setRestartData={setRestartData}
                              restartData={restartData}
                              fakeId={book.id}
                              book={book}
                              key={book.id}
                            />
                          );
                        }
                        return (
                          <InfoEveryBook
                            book={book}
                            key={book.id}
                            setRestartData={setRestartData}
                            restartData={restartData}
                          />
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
              <div className={styles.library_sortBlock}>
                <h5>По жанрам</h5>
                <SortBtns />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LibraryPage;
