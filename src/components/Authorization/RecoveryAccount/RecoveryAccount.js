import React, { useState } from "react";
import styles from "./RecoveryAccount.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changePreloader,
  resetPassword,
} from "../../../store/reducers/windowsSlice";
import Preloader from "../../Preloader/Preloader";

const RecoveryAccount = ({ setRestore }) => {
  const dispatch = useDispatch();
  const { preloader } = useSelector((state) => state.windowsSlice);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const sendRequestResetPassword = (e) => {
    e.preventDefault();
    dispatch(changePreloader(true));
    dispatch(resetPassword(data));
    setTimeout(() => {
      setRestore(false);
      dispatch(changePreloader(false));
    }, 1000);
  };

  // console.log(data);
  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <div className={styles.parentBlock_recovery}>
          <form action="" onSubmit={sendRequestResetPassword}>
            <input
              placeholder="E-mail "
              className={styles.input_email_recover}
              required
              onChange={(e) =>
                setData((info) => ({ ...info, email: e.target.value }))
              }
            />
            <label className={styles.text_recovery}>
              Мы сбросим пароль на вашу почту
            </label>
            {/* <input
          placeholder="- - - -"
          className={styles.input_numbers_recover}
          pattern="\d{4}"
          maxLength="4"
          required
          onChange={(e) =>
            setData((info) => ({ ...info, password: e.target.value }))
          }
        /> */}
            {/* <p>Введите код из 4 цифр</p> */}
            <button type="submit">Отправить</button>
          </form>
        </div>
      )}
    </>
  );
};

export default RecoveryAccount;
