import React from "react";
import styles from "./UsersPage.module.css";
import SortUsersBook from "../../components/Users/SortUsersBook/SortUsersBook";
import FavoritesBookUsers from "../../components/Users/FavoritesBookUsers/FavoritesBookUsers";
import SettingsUsers from "../../components/Users/SettingsUsers/SettingsUsers";
import DataEveryUser from "../../components/Users/DataEveryUser/DataEveryUser";

const UsersPage = () => {
  return (
    <div className="container">
      <div className={styles.parent_userBlock}>
        <div className={styles.child_books_userBlock}>
          <SortUsersBook />
          <FavoritesBookUsers />
        </div>
        <div className={styles.child_user_userBlock}>
          <SettingsUsers />
          <DataEveryUser />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
