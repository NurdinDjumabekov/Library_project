import React from "react";
import books from "../../assests/images/readingNow/books_many.png";
import styles from "./ReadingNow.module.css";
import { useNavigate } from "react-router-dom";

const ReadingNow = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.parent_reading}>
      <div className="container">
        <div className={styles.child_reading}>
          <div>
            <p>
              Чтобы иметь доступ к богатому наследию литературы и культуры нашей
              страны, пожалуйста, зарегистрируйтесь
            </p>
            <div>
              <button onClick={() => navigate("/registration")}>
                Регистрация
              </button>
            </div>
          </div>
          <div>
            <img src={books} alt="books" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingNow;
