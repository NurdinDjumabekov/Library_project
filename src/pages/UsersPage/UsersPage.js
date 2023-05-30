import React from "react";
import styles from "./UsersPage.module.css";
import AboutUser from "../../components/AboutUser/AboutUser";
import SortBooksBTN from "../../components/SortBooksBTN/SortBooksBTN";
import SortBookSearchInput from "../../components/SortBookSearchInput/SortBookSearchInput";

const UsersPage = () => {
  return (
    <div className={styles.parent_userBlock}>
      <div className="container">
        <div className={styles.child_userBlock}>
          <AboutUser />
          <div className={styles.block_for_sorts}>
            <SortBooksBTN />
            <SortBookSearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
