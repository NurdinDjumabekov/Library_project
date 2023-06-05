import React from "react";
import styles from "./InfoEveryBook.module.css";

const InfoEveryBook = ({ book }) => {
  return (
    <div className={styles.parent_infoBook}>
      <div className={styles.imgBlock_infoBook}>
        <img src={book.url} alt="url" />
      </div>
      <div className={styles.textInfoBlock_infoBook}>
        <h4>«{book.title}»</h4>
        <h5>{book.writer}</h5>
        <span>{book.grade}</span>
        <p>
          Данная книга раскрывает Вам, уважаемый читатель, пошаговые действия
          достижения успеха. Поможет понять и осознать, что именно для Вас
          является успехом. Поможет обрести здоровье, любовь, финансовую
          независимость и прочее факторы успешных людей. Советую Вам прочесть ее
          несколько раз,или сделать так.
        </p>
      </div>
    </div>
  );
};

export default InfoEveryBook;
