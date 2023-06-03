import React, { useEffect, useState} from "react";
import styles from "./UserBook.module.css";
import userBook_dots from '../../assests/images/UserBook/userBook_dots.svg';
import userBook_tileDots from '../../assests/images/UserBook/userBook_tileDots.svg'
import UserBookDropMenu from "../UserBookDropMenu/UserBookDropMenu";

const UserBook = ({ listOfBooks, viewOfList, choiceFilter }) => {
  console.log(viewOfList)
  listOfBooks =  choiceFilter === 'Все' ? listOfBooks : listOfBooks.filter(item => item.choice === choiceFilter)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setSelectedBookIndex(index);
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeMenu = () =>{
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <div className={styles.parent_userBook}>
      {Object.keys(listOfBooks).length === 0 ? (
        <h3 className={styles.ifNoBooks}>Здесь закладок нет</h3>
      ) : (
        viewOfList === 1 ? (
          <ol className={styles.list}>
            {listOfBooks.map((item, index) => (
              <li key={index}>
                <div className={styles.bookCont}>
                  <img alt="" src={item.linkImg} className={styles.bookCover}/>
                  <div className={styles.bookMainInfo}>
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                  </div>
                  <div className={styles.bookOther}>
                    <div className={styles.bookDate}>
                      <p>Добавлено</p>
                      <p>Дата</p>
                    </div>
                    <button className={styles.bookFunc} onClick={() => handleDropdownToggle(index)}><img src={userBook_dots} alt="" /></button>
                    {isDropdownOpen && selectedBookIndex === index && (
                      <UserBookDropMenu bookmark={item.choice} isOpen={closeMenu}/>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <ol className={styles.tile}>
            {listOfBooks.map((item, index) => (
              <li key={index}>
                <div className={styles.bookCont}>
                  <div className={styles.imgCont}>
                    <img src={item.linkImg} className={styles.bookCover}></img>
                    <button className={styles.bookFunc} onClick={() => handleDropdownToggle(index)}><img src={userBook_tileDots}alt="" /></button>
                  </div>
                  {isDropdownOpen && selectedBookIndex === index && (
                      <UserBookDropMenu bookmark={item.choice}/>
                    )}
                  <h3>{item.title}</h3>
                </div>
              </li>
            ))}
          </ol>
        )
      )}
    </div>
  );
};

export default UserBook;