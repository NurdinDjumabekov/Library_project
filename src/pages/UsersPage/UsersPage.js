import React, { useEffect, useState } from "react";
import styles from "./UsersPage.module.css";
import SortUsersBook from "../../components/Users/SortUsersBook/SortUsersBook";
import FavoritesBookUsers from "../../components/Users/FavoritesBookUsers/FavoritesBookUsers";
import DataEveryUser from "../../components/Users/DataEveryUser/DataEveryUser";
import { useDispatch, useSelector } from "react-redux";
import { sendRequestAllDataUser } from "../../store/reducers/usersStateSlice";
import Preloader from "../../components/Preloader/Preloader";
import NoAuth from "../../components/NoAuth/NoAuth";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { preloader, dataFavotitesBook, checkedUser, choiceUserBook } =
    useSelector((state) => state.usersStateSlice);
  //   console.log(dataFavotitesBook, "dataFavotitesBook");
  // console.log(choiceUserBook);
  useEffect(() => {
    dispatch(sendRequestAllDataUser(choiceUserBook));
  }, [choiceUserBook]);
  return (
    <>
      {false ? (
        <Preloader />
      ) : (
        <>
          {checkedUser ? (
            <div className="container">
              <div className={styles.parent_userBlock}>
                <div className={styles.child_books_userBlock}>
                  <SortUsersBook />
                  <FavoritesBookUsers dataFavotitesBook={dataFavotitesBook} />
                </div>
                <div className={styles.child_user_userBlock}>
                  <div className={styles.parent_settingBlock}>
                    <button onClick={() => navigate("/setting_users")}>
                      Настройки
                    </button>
                  </div>
                  <DataEveryUser />
                </div>
              </div>
            </div>
          ) : (
            <NoAuth />
          )}
        </>
      )}
    </>
  );
};

export default UsersPage;
