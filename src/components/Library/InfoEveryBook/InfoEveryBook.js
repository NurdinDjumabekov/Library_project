import React from "react";
import styles from "./InfoEveryBook.module.css";
import star from "../../../assests/images/Sliders/Star_grade.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";

const InfoEveryBook = ({ book }) => {
  // console.log(book);
  // const requestSend = async () => {
  //   console.log(book.url);
  //   try {
  //     const { data } = await axios.get(`${book.url}`);
  //     console.log(data);
  //   } catch {
  //     console.log("error");
  //   }
  // };
  return (
    <NavLink>
      <div className={styles.parent_infoBook}>
        <div className={styles.imgBlock_infoBook}>
          <img src={book.cover} alt="url" />
        </div>
        <div className={styles.textInfoBlock_infoBook}>
          <h4>«{book.title}»</h4>
          <h5>{book.writer}</h5>
          <div>
            <img src={star} alt="star" />
            <span>{book.middle_star}</span>
          </div>
          <p>
            Данная книга раскрывает Вам, уважаемый читатель, пошаговые действия
            достижения успеха. Поможет понять и осознать, что именно для Вас
            является успехом. Поможет обрести здоровье, любовь, финансовую
            независимость и прочее факторы успешных людей. Советую Вам прочесть
            ее несколько раз,или сделать так.
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default InfoEveryBook;
