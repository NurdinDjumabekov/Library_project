import React, { useEffect, useState } from "react";
import styles from "./InfoEveryBook.module.css";
import star from "../../../assests/images/Sliders/Star_grade.svg";
import { NavLink } from "react-router-dom";
import AddBookFavorite from "../../AddBookFavorite/AddBookFavorite";

const InfoEveryBook = ({ book }) => {
  const [numRating, setNumRating] = useState(0);
  useEffect(() => {
    setNumRating(book?.middle_star);
    setNumRating((prev) =>
      prev % 1 === 0 ? prev.toString() + "." + "0" : prev
    );
  }, [book]);

  return (
    <section>
      <NavLink to={`/detailed/${book.id}`}>
        <div className={styles.parent_infoBook}>
          <div className={styles.imgBlock_infoBook}>
            <img src={book.cover} alt="url" />
          </div>
          <div className={styles.textInfoBlock_infoBook}>
            <div>
              <div className={styles.textInfoBlock_infoBook_inner}>
                <h4>«{book.title}»</h4>
                <h5>Чынгыз Айтматов</h5>
                <div>
                  <img src={star} alt="star" />
                  <span>{numRating}</span>
                </div>
              </div>
            </div>
            <p>
              Данная книга раскрывает Вам, уважаемый читатель, пошаговые
              действия достижения успеха. Поможет понять и осознать, что именно
              для Вас является успехом. Поможет обрести здоровье, любовь,
              финансовую независимость и прочее факторы успешных людей. Советую
              Вам прочесть ее несколько раз,или сделать так.
            </p>
          </div>
        </div>
      </NavLink>
      <AddBookFavorite id={book.id} />
    </section>
  );
};

export default InfoEveryBook;
