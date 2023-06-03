import React, { useState } from "react";
import styles from "./UsersPage.module.css";
import AboutUser from "../../components/AboutUser/AboutUser";
import SortBooksBTN from "../../components/SortBooksBTN/SortBooksBTN";
import SortBookSearchInput from "../../components/SortBookSearchInput/SortBookSearchInput";
import UserBook from "../../components/UserBook/UserBook";
import NavMenuUsers from "../../components/NavMenuUsers/NavMenuUsers";
import Footer from "../../components/Footer/Footer";

const UsersPage = () => {
  const list = [
    {
      title: 'Алхимик',
      author:'Пауло Коэльо',
      choice: 'Читаю',
      linkImg:
        'https://cache3.youla.io/files/images/720_720_out/5b/f7/5bf7a372f695762eb8717f74.jpg',
    },{
      title: '451 по фаренгейту',
      author:'Рэй Бредбери',
      choice: 'Прочитано',
      linkImg:
        'https://sun9-16.userapi.com/impg/KQousNkB82_eRQi940nlWW9JirfQkX5yNcSj7A/Te58by5g5pg.jpg?size=427x604&quality=95&sign=2ff8a3a9f5c41a70bf1379ac580d343a&c_uniq_tag=lZSI5-JtBzhA2qgKtHvmtg3duCKHDIJVTazg4E0HlEU&type=album',
    },{
      title: 'Маленький принц',
      author:'Антуан де Сент-Экзюпери',
      choice: 'Читаю',
      linkImg:
        'https://ourboox-media-prod.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/05/10104850/ПРИНЦ.jpg',
    },{
      title: 'Ведьмак. Кровь эльфов',
      author:'Анджей Сапковский',
      choice: 'Читаю',
      linkImg:
        'https://cdn1.ozone.ru/s3/multimedia-9/6244611261.jpg',
    },{
      title: '11/22/63',
      author:'Стивен Кинг',
      choice: 'Прочитано',
      linkImg:
        'https://edvisrb.ru/images/uploads/6411.jpg',
    },{
      title: '1984',
      author:'Джордж Оруэлл ',
      choice: 'Читаю',
      linkImg:
        'https://pbs.twimg.com/media/FRq1MZoXsAA-4-O?format=jpg&name=large',
    },
  ]
  const [choiceFilter,setChoiceFilter] = useState(0)
  const [viewOfList,setViewOfList] = useState(1)

  const [filteredList, setFilteredList] = useState(list)
  const updatefilteredList = (list)=> {
    setFilteredList(list);
  }
  const updateViewOfList = (view) => {
    setViewOfList(view);
  }
  const updateChoiceFilter = (choice) =>{
    setChoiceFilter(choice);
  }
  return (
    <>
      <div className={styles.parent_userBlock}>
        <NavMenuUsers />
        <div className="container">
          <div className={styles.child_userBlock}>
            <AboutUser />
            <div className={styles.block_for_sorts}>
              <SortBooksBTN updateChoiceFilter={updateChoiceFilter} updateViewOfList={updateViewOfList}/>
              <div>
                <SortBookSearchInput updateFiteredList={updatefilteredList} listOfBook={list}/>
                <UserBook listOfBooks={filteredList} viewOfList={viewOfList} choiceFilter={choiceFilter}/>
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
