import React, { useEffect, useState } from "react";
import styles from "./MainRegistration.module.css";
import { useDispatch, useSelector } from "react-redux";
import LevelPassword from "../LevelPassword/LevelPassword";
import {
  changeDifficultPassword,
  changeDifficultPassword_text,
} from "../../../store/reducers/windowsSlice";

const MainRegistration = () => {
  const dispatch = useDispatch();
  const { difficultPassword } = useSelector((state) => state.windowsSlice);
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordHave, setPasswordHave] = useState({
    level: false,
    descriptionLevel: false,
  });
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState("");

  // console.log(difficultPassword, "difficultPassword");
  const textRegExp = /[a-zA-Z]/;
  const numRegExp = /[0-9]/;
  const symboltRegExp = /[!@#$%+^/()?\-&.,_*]/;
  useEffect(() => {
    if (password === "") {
      setPasswordHave({ level: false });
    } else if (password.length !== 0) {
      setPasswordHave({ level: true });
      if (
        password.length >= 8 &&
        numRegExp.test(password) &&
        textRegExp.test(password)
      ) {
        dispatch(changeDifficultPassword({ width: 140, color: "yellow" }));
        dispatch(changeDifficultPassword_text("Хороший пароль"));
        if (
          password.length >= 8 &&
          symboltRegExp.test(password) &&
          numRegExp.test(password) &&
          textRegExp.test(password)
        ) {
          dispatch(changeDifficultPassword({ width: 210, color: "green" }));
          dispatch(changeDifficultPassword_text("Сложный пароль"));
        }
      } else if (password.length < 8) {
        dispatch(changeDifficultPassword({ width: 70, color: "red" }));
        dispatch(changeDifficultPassword_text("Слабый пароль"));
      } else if (
        password.length >= 8 &&
        numRegExp.test(password) &&
        symboltRegExp.test(password)
      ) {
        dispatch(changeDifficultPassword({ width: 140, color: "yellow" }));
        dispatch(changeDifficultPassword_text("Хороший пароль"));
      } else if (
        password.length >= 8 &&
        textRegExp.test(password) &&
        symboltRegExp.test(password)
      ) {
        dispatch(changeDifficultPassword({ width: 140, color: "yellow" }));
        dispatch(changeDifficultPassword_text("Хороший пароль"));
      }
    }
  }, [password]);

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

  const descriptionLevelFN = () => {
    if (password.length === 0) {
      setPasswordHave({ descriptionLevel: true });
    } else if (password.length !== 0) {
      setPasswordHave({ descriptionLevel: false });
      setPasswordHave({ level: true });
    }
  };
  const descriptionLevelFN_revers = (e) => {
    if (e.target.tagName !== "INPUT") {
      setPasswordHave({ descriptionLevel: false });
    }
  };
  document.body.addEventListener("click",   );
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
          onClick={() => descriptionLevelFN()}
        />
        <LevelPassword passwordHave={passwordHave} />

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
