import React, { useEffect, useState } from "react";
import styles from "./MainRegistration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTextLogin } from "../../../store/reducers/windowsSlice";

const MainRegistration = () => {
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const [stateRegistration, setStateRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const { textLogin } = useSelector((state) => state.windowsSlice);
  // console.log(textLogin, "textLogin");
  useEffect(() => {
    if (email.length < 6 && email !== "") {
      dispatch(changeTextLogin("Логин должен быть больше 6ти символов"));
    } else if (email.length < 6) {
      dispatch(changeTextLogin(""));
    } else if (email === "") {
      dispatch(changeTextLogin(""));
    } else if (email.length > 6 && email.includes("@gmail.com")) {
      dispatch(changeTextLogin("Всё верно!"));
    } else if (email.length > 16 && email.includes("@gmail.com")) {
      dispatch(changeTextLogin("Логин должен быть больше 6ти символов!"));
    } else if (email.length > 6 && !email.includes("@gmail.com")) {
      dispatch(changeTextLogin("Введите email"));
    }
  }, [email]);

  // console.log(email);
  return (
    <div className={styles.parent_refistration}>
      <form action="">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <label>{textLogin}</label>
        <input type="password" placeholder="Пароль " required />
        <input type="password" placeholder="Введите пароль еще раз " required />
        <div>
          <input type="checkbox" onClick={() => setDisable(!disable)} />
          <div>
            <span>я прочитал и согласен с</span>
            <span>Правилами Пользования и Политикой Конфидециальности</span>
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
  );
};

export default MainRegistration;
