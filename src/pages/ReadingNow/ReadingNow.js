import React, { useEffect, useState } from "react";
import books from "../../assests/images/readingNow/books_many.png";
import styles from "./ReadingNow.module.css";
import { useNavigate } from "react-router-dom";
import ResentlyRead from "../../components/ResentlyRead/ResentlyRead";
import { useDispatch, useSelector } from "react-redux";
import { toTakeReadingNowBooks } from "../../store/reducers/usersStateSlice";
import NoAuth from "../../components/NoAuth/NoAuth";

const ReadingNow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { checkedUser, readingNowBookUser } = useSelector(
    (state) => state.usersStateSlice
  );

  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("dataUser"))
  );
  useEffect(() => {
    dispatch(toTakeReadingNowBooks());
  }, []);
  // console.log(userName, "ersdtyfguhijop");
  // console.log(userName.username, "name");
  // useEffect(() => {}, []);
  return (
    <>
      {userName ? (
        <>
          {readingNowBookUser.length !== 0 ? (
            <ResentlyRead />
          ) : (
            <div className={styles.parent_reading}>
              <div className="container">
                <div className={styles.child_reading}>
                  <div>
                    <h1>
                      Добро пожаловать,
                      <span>{userName?.username}</span>
                    </h1>
                    <div></div>
                    <p>
                      <button onClick={() => navigate("/library")}>
                        Нажмите сюда,
                      </button>
                      чтобы перейти в раздел библиотеки
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <NoAuth />
        </>
      )}
    </>
  );
};

export default ReadingNow;
