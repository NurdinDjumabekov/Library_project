import React from "react";
import books from "../../assests/images/readingNow/books_many.png";
import styles from "./ReadingNow.module.css";
import { useNavigate } from "react-router-dom";
import ResentlyRead from "../../components/ResentlyRead/ResentlyRead";
import { useSelector } from "react-redux";

const ReadingNow = () => {
  const navigate = useNavigate();
  const { checkedUser } = useSelector((state) => state.usersStateSlice);
  return (
    <>
      {false ? (
        <ResentlyRead />
      ) : (
        <div className={styles.parent_reading}>
          <div className="container">
            <div className={styles.child_reading}>
              <div>
                <h1>
                  Добро пожаловать , <span>Nurdin</span>
                </h1>
                <p>
                  <button>Нажмите сюда,</button> чтобы перейти в раздел
                  библиотеки
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadingNow;
