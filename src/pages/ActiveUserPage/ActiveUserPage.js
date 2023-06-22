import React, { useState } from "react";
import styles from "./ActiveUserPage.module.css";
import logo from "../../assests/images/logo/logo_library.svg";
import library from "../../assests/images/login_registration/registration_page.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { changePreloader } from "../../store/reducers/sendRequestMainPageSlice";
import { useDispatch } from "react-redux";

const ActiveUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeCode, setActiveCode] = useState("");
  const sendRequestLogin = async (e) => {
    e.preventDefault();
    try {
      const info = axios({
        method: "POST",
        url: "https://kitepkana1.pythonanywhere.com/auth/users/activation/",
        data: {
          code: activeCode,
        },
      });
      console.log(info, "ActiveUserPage");
      navigate("/");
      dispatch(changePreloader(true)); 
      //   localStorage.setItem("access", info.data.access);
      //   localStorage.setItem("refresh", info.data.refresh);
      //   if (info.data.access && info.data.refresh) {
      //     navigate("/");
      //   }
      //   setDate((info) => ({ ...info, login: "", password: "" }));
    } catch (error) {
      console.log(error, "error ActiveUserPage");
    }
  };
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
            <div className={styles.parentBlock_activation}>
              <form action="" onSubmit={sendRequestLogin}>
                <input
                  placeholder="- - - -"
                  className={styles.input_numbers_recover}
                  pattern="\d{4}"
                  maxLength="4"
                  required
                  onChange={(e) => setActiveCode(e.target.value)}
                />
                <p>Введите код из 4 цифр</p>
                <button type="submit">Активировать</button>
              </form>
            </div>
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

export default ActiveUserPage;
