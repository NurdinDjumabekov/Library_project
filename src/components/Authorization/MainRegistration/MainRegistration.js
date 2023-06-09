import React, { useEffect, useState } from "react";
import styles from "./MainRegistration.module.css";
import { useDispatch, useSelector } from "react-redux";
import LevelPassword from "../LevelPassword/LevelPassword";
import { changeDifficultPassword } from "../../../store/reducers/windowsSlice";

const MainRegistration = () => {
  const dispatch = useDispatch();
  const { difficultPassword } = useSelector((state) => state.windowsSlice);
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordHave, setPasswordHave] = useState(false);
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState("");

  // console.log(difficultPassword, "difficultPassword");
  const textRegExp = /[A-Za-z]/;
  const numRegExp = /[0-9]/;
  const symboltRegExp = /^[A-Za-z]/;
  useEffect(() => {
    // if (password.length < 6 && password !== "") {
    //   dispatch(changeDifficultPassword());
    // } else if (password.length < 6) {
    //   dispatch(changeDifficultPassword(""));
    // }
    if (password === "") {
      setPasswordHave(false);
    } else if (password !== "") {
      setPasswordHave(true);
      if (password.length >= 8) {
        dispatch(changeDifficultPassword({ width: 140, color: "yellow" }));
        if (password.length >= 12) {
          dispatch(changeDifficultPassword({ width: 210, color: "green" }));

          // console.log("Лёгкий");
        } // console.log("Сложный");
      } else if (password.length < 6) {
        dispatch(changeDifficultPassword({ width: 70, color: "red" }));
      }
    }
  }, [password]);
  // numRegExp.test(password) && textRegExp.test(password)

  const gmailRegExp_1 = /^[A-Za-z0-9_\-\.\-]+\@[gmail]+\.com$/;
  const regExpCheckFN = (e) => {
    e.preventDefault();
    if (gmailRegExp_1.test(email)) {
      console.log(email);
    } else {
      console.log("некорректные данные");
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 2000);
    }
  };
  return (
    <div className={styles.parent_refistration}>
      <form action="" onSubmit={regExpCheckFN}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
          className={styles.registration_Email}
        />
        {emailError && (
          <label
            className={styles.label_email}
            onClick={() => setEmailError(false)}
          >
            Некорректный Email !
          </label>
        )}
        <input
          type="password"
          placeholder="Пароль "
          required
          className={styles.registration_Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordHave && <LevelPassword />}

        <input
          type="password"
          placeholder="Введите пароль еще раз "
          required
          className={styles.registration_repeatPassword}
        />
        <div>
          <input type="checkbox" onClick={() => setDisable(!disable)} />
          <div>
            <span>я прочитал и согласен с</span>
            <span>Правилами Пользования и Политикой Конфидециальности</span>
          </div>
        </div>
        <button
          disabled={disable}
          className={disable ? styles.shadow_btn : ""}
          onClick={(e) => regExpCheckFN(e)}
          type="submit"
        >
          Зарегестрироваться
        </button>
      </form>
    </div>
  );
};

export default MainRegistration;
