import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import logo from "../../assests/images/logo/logo_library.svg";
import library from "../../assests/images/login_registration/login_page.jpg";
import playMarket from "../../assests/images/windows/playMarket.png";
import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  const [restore, setRestore] = useState(false);
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
            <h2>Добро пожаловать! </h2>
            <p>
              Войдите, что бы бесплатно читать великие произведения кыргызских
              писателей на нашем сайте.
            </p>
            <div className={styles.block_btns_active}>
              <button>
                <NavLink to={"/registration"}>Регистрация</NavLink>
              </button>
              <button className={styles.active_btn_win}>
                <NavLink to={"/login"}>Вход</NavLink>
              </button>
            </div>
            {restore ? (
              <>
                <form action="">
                  <input
                    placeholder="E-mail "
                    className={styles.input_email}
                    required
                  />
                  <input
                    placeholder="-- -- -- --"
                    className={styles.input_numbers}
                    pattern="\d{4}"
                    maxlength="4"
                    required
                  />
                  <p>Введите код из 4 цифр</p>
                  <button onClick={() => setRestore(false)}>
                    Восстановить
                  </button>
                </form>
              </>
            ) : (
              <>
                <form action="">
                  <input
                    className={styles.input_email}
                    placeholder="E-mail "
                    required
                  />
                  <input
                    className={styles.input_password}
                    type="password"
                    required
                    placeholder="Пароль "
                  />
                  <button type="submit">Войти</button>
                </form>
                <span>Вы забыли пароль?</span>
                <button onClick={() => setRestore(true)}>Восстановить</button>
              </>
            )}
          </div>
          <div className={styles.child_login_right}>
            <p>
              Читайте книги великих кыргызских писателей на нашем сайте или
              скачайте приложение “Мурас” в Google Play бесплатно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
