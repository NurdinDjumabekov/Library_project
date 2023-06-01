import React from "react";
import styles from "./UserBook.module.css";

const UserBook = ({listOfBooks}) => {
  return <div className={styles.parent_userBook}>
    <ol className={styles.list}>
      {listOfBooks.map((item,index)=>
          <li key={index}>
            <div className={styles.bookCont}>
              <img/>
              <div>
                <h3>{item.name}</h3>
                <p>{item.time}</p>  
              </div>  
            </div>  
          </li>
      )}
    </ol>
  </div>;
};

export default UserBook;
