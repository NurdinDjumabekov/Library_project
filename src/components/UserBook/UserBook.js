import React from "react";
import styles from "./UserBook.module.css";
import userBook_dots from '../../assests/images/UserBook/userBook_dots.svg';

const UserBook = ({ listOfBooks, viewOfList, choiceFilter }) => {
  console.log(viewOfList)
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
                  <img alt="" />
                  <div className={styles.bookMainInfo}>
                    <h3>{item.name}</h3>
                    <p>Имя Автора</p>
                  </div>
                  <div className={styles.bookOther}>
                    <div className={styles.bookDate}>
                      <p>Добавлено</p>
                      <p>{item.date}</p>
                    </div>
                    <img src={userBook_dots} className={styles.bookFunc} alt="" />
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
                  <div className={styles.imgCont}><img src={userBook_dots} className={styles.bookFunc} alt="" /></div>
                  <h3>{item.name}</h3>
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