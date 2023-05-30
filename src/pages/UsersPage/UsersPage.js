import React from "react";
import styles from "./UsersPage.module.css";
import AboutUser from "../../components/AboutUser/AboutUser";
import SortBooksBTN from "../../components/SortBooksBTN/SortBooksBTN";
import SortBookSearchInput from "../../components/SortBookSearchInput/SortBookSearchInput";
import UserBook from "../../components/UserBook/UserBook";
import NavMenuUsers from "../../components/NavMenuUsers/NavMenuUsers";
import Footer from "../../components/Footer/Footer";

const UsersPage = () => {
  return (
    <>
      <div className={styles.parent_userBlock}>
        <NavMenuUsers />
        <div className="container">
          <div className={styles.child_userBlock}>
            <AboutUser />
            <div className={styles.block_for_sorts}>
              <SortBooksBTN />
              <div>
                <SortBookSearchInput />
                <UserBook />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UsersPage;
