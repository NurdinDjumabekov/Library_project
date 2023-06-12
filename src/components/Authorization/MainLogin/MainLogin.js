import React, { useEffect, useState } from "react";
import styles from "./MainLogin.module.css";
import EyePassword from "../EyePassword/EyePassword";

const MainLogin = ({ setRestore }) => {
  const [data, setDate] = useState({
    login: "",
    password: "",
  });

  const [wrong, setWrong] = useState({
    errorPassword: false,
    errorlogin_password: false,
    lookPassword: false,
    lookBtnEye: false,
  });

  const gmailRegExp = /^[A-Za-z0-9_\-\.\-]+\@[gmail]+\.com$/;

  const sendDataLgin = (e) => {
    e.preventDefault();
    if (gmailRegExp.test(data.login)) {
      setWrong((info) => ({
        ...info,
        errorlogin: false,
      }));
      setDate((info) => ({ ...info, login: "", password: "" }));
      // console.log(wrong.errorlogin);
    } else {
      setWrong((info) => ({
        ...info,
        errorlogin: true,
      }));
      setTimeout(() => {
        setWrong((info) => ({
          ...info,
          errorlogin: false,
        }));
      }, 1500);
      // console.log(wrong.errorlogin);
    }
  };

  useEffect(() => {
    if (data.password.length > 0) {
      setWrong((info) => ({
        ...info,
        lookBtnEye: true,
      }));
    } else {
      setWrong((info) => ({
        ...info,
        lookBtnEye: false,
      }));
    }
  }, [data]);
  return (
    <div className={styles.parentBlock_mainLogin}>
      <form action="" onSubmit={sendDataLgin} className={styles.form_login}>
        <label className={styles.login_block}>
          <input
            className={styles.input_email}
            placeholder="E-mail "
            required
            // type="email"
            value={data.login}
            onChange={(e) =>
              setDate((info) => ({ ...info, login: e.target.value }))
            }
          />
        </label>
        {wrong.errorlogin && (
          <label className={styles.wrongEmail}>Неверный Email!</label>
        )}
        <label className={styles.password_block}>
          <input
            className={styles.input_password}
            type={wrong.disable ? "text" : "password"}
            required
            placeholder="Пароль"
            value={data.password}
            onChange={(e) =>
              setDate((info) => ({ ...info, password: e.target.value }))
            }
          />
          {wrong.lookBtnEye && (
            <EyePassword
              lookPassword={wrong.disable}
              setDisable={setWrong}
              type={"password_loginPage"}
            />
          )}
        </label>
        {wrong.errorlogin_password && (
          <label className={styles.errorlogin_password}>
            Неправильный пароль!
          </label>
        )}
        <button type="submit">Войти</button>
      </form>
      <span>Вы забыли пароль?</span>
      <button onClick={() => setRestore(true)}>Восстановить</button>
    </div>
  );
};

export default MainLogin;
