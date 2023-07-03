import React, { useEffect, useState } from "react";
import styles from "./InfoEveryBook.module.css";
import star from "../../../assests/images/Sliders/Star_grade.svg";
import { NavLink } from "react-router-dom";
import AddBookFavorite from "../../AddBookFavorite/AddBookFavorite";
import { useSelector } from "react-redux";
import Rating_Star from "../../Sliders/SlidersMainPage/Rating_Star/Rating_Star";

const InfoEveryBook = ({ book, arr, setArr }) => {
  const [numRating, setNumRating] = useState(0);
  const { checkedUser } = useSelector((state) => state.usersStateSlice);
  useEffect(() => {
    setNumRating(book?.middle_star);
    setNumRating((prev) =>
      prev % 1 === 0 ? prev.toString() + "." + "0" : prev
    );
  }, [book]);
  console.log(book);
  // console.log(dataFavotitesBook, "dataFavotitesBook6666");
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
                  <Rating_Star
                    grade_star={book?.middle_star}
                    grade={book?.middle_star}
                  />
                </div>
              </div>
            </div>
            <p>{book?.summary}</p>
          </div>
        </div>
      </NavLink>
      {checkedUser && (
        <AddBookFavorite id={book?.id} arr={arr} setArr={setArr} />
      )}
    </section>
  );
};

export default InfoEveryBook;
