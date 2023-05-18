import React from "react";
import styles from "./Footer.module.css";
import telega from "../../assests/images/MainPage/footer/telega.svg";
import youTube from "../../assests/images/MainPage/footer/youTube.svg";
import insta from "../../assests/images/MainPage/footer/instagram.svg";
import whatsApp from "../../assests/images/MainPage/footer/whatsApp.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.parent_footer}>
      <div className="container">
        <div className={styles.child_footer}>
          <div className={styles.footer_thanks}>
            <h6>Благодарим за внимание!</h6>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={styles.footer_aboutUs}>
            <h6>О нас</h6>
            <ul>
              <li>
                <a href="">Магазины книг</a>
              </li>
              <li>
                <a href="">Галерея</a>
              </li>
              <li>
                <NavLink to='/news'>Новости</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footer_socialMedia}>
            <h6>Социальные сети</h6>
            <ul>
              <li>
                <a href="">
                  <img src={telega} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={youTube} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={insta} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={whatsApp} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
