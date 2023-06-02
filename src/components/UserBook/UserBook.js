import React from "react";
import styles from "./UserBook.module.css";
import userBook_dots from '../../assests/images/UserBook/userBook_dots.svg'

const UserBook = ({listOfBooks}) => {
  return <div className={styles.parent_userBook}>
    {Object.keys(listOfBooks).length == 0 ? <h3 className={styles.ifNoBooks}>Здесь закладок нет</h3> : 
    
    <ol className={styles.list}>
      {listOfBooks.map((item,index)=>
          <li key={index}>
            <div className={styles.bookCont}>
              <img/>
              <div className={styles.bookMainInfo}>
                <h3>{item.name}</h3>
                <p>Имя Автора</p>
              </div>
              <div className={styles.bookOther}>
                <div className={styles.bookDate}>
                  <p>Добавлено</p>
                  <p>{item.date}</p>
                </div>
                <img src={userBook_dots} className={styles.bookFunc}/>
              </div>
            </div>  
          </li>
      )}
    </ol>}
  </div>;
};

export default UserBook;
