import React, { useState } from "react";
import styles from "./Singup.module.scss";
import PHOTO from "../../assests/images/login/foto.jpg";
import PLAY from "../../assests/images/login/rectangle.svg";
import LOGO from "../../assests/images/logo/logo_library.svg";
import GOOGLE from "../../assests/images/login/google.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../../store/reducers/Auth/auth.actions";
import {
  getUser,
  getNewPassword,
} from "../../store/reducers/Login/login.actions";

const Singup = () => {
  let token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isCheck, setCheck] = useState(false);
  const [restore, setRestore] = useState(false);
  const [number, setNumber] = useState("");

  const validateRow = (params) => {
    if (params.email && params.password === params.checkPassword) return true;
    else
      console.log({ text: "Заполните все поля правильно!!!", type: "warning" });
    return false;
  };

  const handleSubmit = () => {
    try {
      console.log("isCheck", isCheck);
      if (!isCheck) return;

      const params = {
        email,
        password,
        checkPassword,
      };

      if (validateRow(params)) {
        dispatch(getAuth(params)).then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.token);
            navigate("/");
            setEmail("");
            setPassword("");
            setCheckPassword("");
          }
        });
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  const handleLogin = () => {
    dispatch(getUser({ email, password, token })).then((res) => {
      if (res.status === 200) {
        navigate("/");
        setEmail("");
        setPassword("");
      }
    });
  };

  const handRestore = () => {
    setRestore(true);
    dispatch(getNewPassword({ email, number, token })).then((res) => {
      if (res?.status === 200) {
        navigate("/");
        setEmail("");
        setRestore(false);
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginForm}>
        <div className={styles.registration}>
          <div className={styles.logo}>
            <img src={LOGO} alt="logo" />
            <h1>Muras</h1>
          </div>
          <div className={styles.title}>
            <div>
              {token?.length ? (
                <h2>Добро пожаловать! </h2>
              ) : (
                <h2>Регистрация</h2>
              )}

              {token?.length ? (
                <p>
                  Войдите, чтобы бесплатно читать великие произведения
                  кыргызских писателей на нашем сайте.
                </p>
              ) : (
                <p>
                  Зарегистрируйтесь, чтобы бесплатно читать книги ваших любимых
                  писателей
                </p>
              )}
            </div>
          </div>
          <div className={styles.loginButton}>
            {token?.length ? (
              <>
                <button className={styles.entrance} disabled>
                  Регестрация
                </button>
                <button className={styles.buttonRegistration}>Вход</button>
              </>
            ) : (
              <>
                <button className={styles.buttonRegistration}>
                  Регестрация
                </button>
                <button className={styles.entrance} disabled>
                  Вход
                </button>
              </>
            )}
          </div>

          <div className={styles.form}>
            <form onSubmit={() => {}}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="Email"
                id="email"
                placeholder="E-mail"
              />

              {restore && (
                <>
                  <input
                    value={number}
                    type="test"
                    id="number"
                    placeholder=" - - - - "
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <p>Введите код из 4 цифр</p>
                </>
              )}
              {!restore && (
                <input
                  value={password}
                  type="password"
                  id="password"
                  placeholder="Пароль"
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}

              {!token?.length && !restore && (
                <input
                  onChange={(e) => setCheckPassword(e.target.value)}
                  value={checkPassword}
                  type="password"
                  id="password"
                  placeholder="Введите пароль еще раз"
                  required
                />
              )}

              <button>
                <img className={styles.img} src={GOOGLE} alt="google" />
                Google
              </button>
              {!token?.length && (
                <div>
                  <input
                    type="checkbox"
                    id=""
                    value={isCheck}
                    className={styles.checkbox}
                    onChange={(e) => setCheck((prev) => !prev)}
                  />
                  <p>
                    я прочитал и согласен с <span>Правилами Пользования</span> и
                    <span> Политикой Конфидециальности </span>
                  </p>
                </div>
              )}
            </form>
          </div>

          {token?.length && !restore ? (
            <>
              <button onClick={handleLogin} className={styles.buttonRegister}>
                Войти
              </button>
              <p>Вы забыли пароль?</p>
              <button onClick={() => setRestore((prev) => !prev)}>
                Восстановить
              </button>
            </>
          ) : !token?.length && !restore ? (
            <button onClick={handleSubmit} className={styles.buttonRegister}>
              Зарегистрироваться
            </button>
          ) : (
            <button onClick={handRestore} className={styles.buttonRegister}>
              Восстановить
            </button>
          )}
        </div>
      </div>

      <div className={styles.photo}>
        <img className={styles.mainPhoto} src={PHOTO} alt="photo" />
        <p>
          Читайте книги великих кыргызских писателей на нашем сайте или скачайте
          приложение "Мурас" в Google Play бесплатно.
        </p>
        <img src={PLAY} alt="play" className={styles.google} />
      </div>
    </div>
  );
};

export default Singup;
