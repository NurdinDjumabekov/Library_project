import React, { useState } from "react";
import styles from "./UsersPage.module.css";
import AboutUser from "../../components/AboutUser/AboutUser";
import SortBooksBTN from "../../components/SortBooksBTN/SortBooksBTN";
import SortBookSearchInput from "../../components/SortBookSearchInput/SortBookSearchInput";
import UserBook from "../../components/UserBook/UserBook";
import NavMenuUsers from "../../components/NavMenuUsers/NavMenuUsers";
import Footer from "../../components/Footer/Footer";

const UsersPage = () => {
  const list = [{name:"Новость 1", date: '01-04-2023', time: "17:46"},
    {name:"Новость 2", date: '15-04-2023', time: "17:12"},
    {name:"Новость 3", date: '15-04-2023', time: "17:13"},
    {name:"Новость 4", date: '12-04-2023', time: "11:45"},
    {name:"Новость 5", date: '10-04-2023', time: "12:26"},
    {name:"Новость 6", date: '01-04-2023', time: "17:46"},
    {name:"Новость 7", date: '15-04-2023', time: "17:12"},
    {name:"Новость 8", date: '15-04-2023', time: "17:13"},
    {name:"Новость 9", date: '12-04-2023', time: "11:45"},
    {name:"Новость 10", date: '10-04-2023', time: "12:26"}]
  const [filteredList, setFilteredList] = useState(list)
  const updatefilteredList = (list)=> {
    setFilteredList(list);
  }
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
                <SortBookSearchInput updateFiteredList={updatefilteredList} listOfBook={list}/>
                <UserBook listOfBooks={filteredList}/>
              </div>
            </div>s
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UsersPage;
