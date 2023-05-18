import React, { useState } from "react";
import styles from "./RegistrationPage.module.css";
import logo from "../../assests/images/logo/logo_library.svg";
import library from "../../assests/images/windows/library_photo.jpg";
import playMarket from "../../assests/images/windows/playMarket.png";
import key from "../../assests/images/windows/key.svg";
import email from "../../assests/images/windows/email.svg";
import { NavLink } from "react-router-dom";

export const RegistrationPage = () => {
  const [disable, setDisable] = useState(true);
  console.log(disable);
  return (
    <div className={styles.parent_login}>
      <div className={styles.inner_login_left}></div>
      <div className={styles.inner_login_right}>
        <img src={library} alt="" />
      </div>
      <div className="container">
        <div className={styles.child_login}>
          <div className={styles.child_login_left}>
            <div className={styles.block_logo}>
              <div>
                <img src={logo} alt="" />
              </div>
              <h1>Muras</h1>
            </div>
            <div className={styles.block_logo}>
              <div>
                <img src={logo} alt="" />
              </div>
              <h1>Muras</h1>
            </div>
            <h2>Регистрация </h2>
            <p>
              Зарегистрируйтесь, чтобы бесплатно читать книги ваших любимых
              писателей
            </p>
            <div className={styles.block_btns_active}>
              <button className={styles.active_btn_win}>
                <NavLink to={"/registration"}>Регистрация</NavLink>
              </button>
              <button>
                <NavLink to={"/login"}>Вход</NavLink>
              </button>
            </div>
            <form action="">
              <label>
                <img src={email} alt="" />
                <input placeholder="E-mail " />
              </label>
              <label>
                <img src={key} alt="" />
                <input type="password" placeholder="Пароль " />
              </label>
              <label>
                <img src={key} alt="" />
                <input placeholder="Введите пароль еще раз " />
              </label>
              <div>
                <input type="checkbox" onClick={() => setDisable(!disable)} />
                <div>
                  <span>я прочитал и согласен с</span>
                  <span>
                    Правилами Пользования и Политикой Конфидециальности
                  </span>
                </div>
              </div>
              <button
                disabled={disable}
                className={disable && styles.shadow_btn}
                type="submit"
              >
                Зарегестрироваться
              </button>
            </form>
          </div>
          <div className={styles.child_login_right}>
            <p>
              Читайте книги великих кыргызских писателей на нашем сайте или
              скачайте приложение “Мурас” в Google Play бесплатно.
            </p>
            <div>
              <button>
                <img src={playMarket} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationPage;
