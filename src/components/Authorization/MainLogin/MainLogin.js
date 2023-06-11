import React, { useEffect, useState } from "react";
import styles from "./MainLogin.module.css";

const MainLogin = ({ setRestore }) => {
  const [data, setDate] = useState({
    login: "",
    password: "",
  });

  const [login, setLogin] = useState({
    emptyPassword: false,
    errorPassword: false,
    emptylogin: false,
    errorlogin: false,
  });

  const gmailRegExp_1 = /^[A-Za-z0-9_\-\.\-]+\@[gmail]+\.com$/;

  const sendDataLgin = (e) => {
    e.preventDefault();
    if (data.login.length > 0) {
      console.log("true");
    } else {
      console.log("f");
    }
  };

  useEffect(() => {}, [data]);
  return (
    <div className={styles.parentBlock_mainLogin}>
      <form action="" onSubmit={sendDataLgin} className={styles.form_login}>
        <label className={styles.login_block}>
          <input
            className={styles.input_email}
            placeholder="E-mail "
            required
            // type="email"
            onChange={(e) =>
              setDate((info) => ({ ...info, login: e.target.value }))
            }
          />
        </label>
        <label className={styles.password_block}>
          <input
            className={styles.input_password}
            type="password"
            required
            placeholder="Пароль"
            onChange={(e) =>
              setDate((info) => ({ ...info, password: e.target.value }))
            }
          />
        </label>
        <button type="submit">Войти</button>
      </form>
      <span>Вы забыли пароль?</span>
      <button onClick={() => setRestore(true)}>Восстановить</button>
    </div>
  );
};

export default MainLogin;
