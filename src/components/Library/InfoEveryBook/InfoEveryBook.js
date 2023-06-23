import React, { useEffect, useState } from "react";
import styles from "./InfoEveryBook.module.css";
import star from "../../../assests/images/Sliders/Star_grade.svg";
import { NavLink } from "react-router-dom";
import AddBookFavorite from "../../AddBookFavorite/AddBookFavorite";
import { useSelector } from "react-redux";

const InfoEveryBook = ({ book, dataFavotitesBook, fakeId }) => {
  const [numRating, setNumRating] = useState(0);
  const { checkedUser } = useSelector((state) => state.usersStateSlice);
  useEffect(() => {
    setNumRating(book?.middle_star);
    setNumRating((prev) =>
      prev % 1 === 0 ? prev.toString() + "." + "0" : prev
    );
  }, [book]);
  // console.log(fakeId);
  return (
    <section>
      <NavLink to={`/detailed/${book.id}`}>
        <div className={styles.parent_infoBook}>
          <div className={styles.imgBlock_infoBook}>
            <img src={book?.cover} alt="url" />
          </div>
          <div className={styles.textInfoBlock_infoBook}>
            <div>
              <div className={styles.textInfoBlock_infoBook_inner}>
                <h4>«{book?.title}»</h4>
                <h5>{book?.author_name}</h5>
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
      {checkedUser && <AddBookFavorite id={book.id} fakeId={fakeId} />}
    </section>
  );
  // console.log(dataFavotitesBook);
};

export default InfoEveryBook;
