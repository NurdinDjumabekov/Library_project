import React from "react";
import styles from "./MainLogin.module.css";

const MainLogin = ({ setRestore }) => {
  return (
    <div className={styles.parentBlock_mainLogin}>
      <form action="" className={styles.form_login}>
        <input
          className={styles.input_email}
          placeholder="E-mail "
          required
          type="email"
        />
        <input
          className={styles.input_password}
          type="password"
          required
          placeholder="Пароль"
        />
        <button type="submit">Войти</button>
      </form>
      <span>Вы забыли пароль?</span>
      <button onClick={() => setRestore(true)}>Восстановить</button>
    </div>
  );
};

export default MainLogin;
