import React from "react";
import styles from "./Author.module.css";
import goRight from "../../assests/images/MainPage/Authors/chevron-right-light.svg";
import goLeft from "../../assests/images/MainPage/Authors/chevron-left-light.svg";
import authorsImg from "../../assests/images/MainPage/Authors/authors_aitmatov.png";
import { NavLink } from "react-router-dom";

const Authors = () => {
  return (
    <div className={styles.parent_authors}>
      <div className="container">
        <div className={styles.child_authors}>
          <div className={styles.mainText_authors}>
            <span>Ч</span>
            <h2>ингиз Айтматов</h2>
          </div>
          <div className={styles.card_authors}>
            <div className={styles.card_authors_left}>
              <img src={authorsImg} alt="portrets" />
            </div>
            <div className={styles.card_authors_right}>
              <div id={styles.first}>
                <h3>Краткая история:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Turpis ultricies
                  tincidunt lorem aenean nunc sociis diam. Convallis imperdiet
                  cursus nulla lacus aliquet nibh integer.
                </p>
              </div>
              <div id={styles.first}>
                <h3>Награды:</h3>
                <p>
                  Aliquet convallis pulvinar vulputate in risus. Luctus mattis
                  maecenas leo risus venenatis libero. Sed dolor venenatis lacus
                  rhoncus viverra at enim curabitur metus.
                </p>
              </div>
              <div id={styles.first}>
                <h3>Произведения:</h3>
                <p>
                  Dui cursus pellentesque ut lectus. Morbi tortor arcu faucibus
                  adipiscing. In a sagittis est fringilla lacinia amet faucibus.
                  Ac nisl a amet non hac quis tempor quisque quam.
                </p>
              </div>
              <div id={styles.tab}>
                <button>Подробнее</button>
              </div>
            </div>
          </div>
          <div className={styles.nav_container}>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">
                  <img src={goLeft} alt="svg" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/right" activeClassName="active">
                  <img src={goRight} alt="svg" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
