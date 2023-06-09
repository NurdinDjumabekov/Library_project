import React, { useEffect } from "react";
import styles from "./UsersPage.module.css";
import SortUsersBook from "../../components/Users/SortUsersBook/SortUsersBook";
import FavoritesBookUsers from "../../components/Users/FavoritesBookUsers/FavoritesBookUsers";
import SettingsUsers from "../../components/Users/SettingsUsers/SettingsUsers";
import DataEveryUser from "../../components/Users/DataEveryUser/DataEveryUser";
import { useDispatch, useSelector } from "react-redux";
import { sendRequestFavotitesData } from "../../store/reducers/usersStateSlice";
import Preloader from "../../components/Preloader/Preloader";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { preloader, dataFavotitesBook } = useSelector(
    (state) => state.usersStateSlice
  );
  //   console.log(dataFavotitesBook, "dataFavotitesBook");

  useEffect(() => {
    dispatch(sendRequestFavotitesData());
  }, []);

  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <div className="container">
          <div className={styles.parent_userBlock}>
            <div className={styles.child_books_userBlock}>
              <SortUsersBook />
              <FavoritesBookUsers dataFavotitesBook={dataFavotitesBook} />
            </div>
            <div className={styles.child_user_userBlock}>
              <SettingsUsers />
              <DataEveryUser />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersPage;
