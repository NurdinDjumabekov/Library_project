import React, { useState } from "react";
import styles from "./RecoveryAccount.module.css";

const RecoveryAccount = ({ setRestore }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // console.log(data);
  return (
    <div className={styles.parentBlock_recovery}>
      <form action="">
        <input
          placeholder="E-mail "
          className={styles.input_email_recover}
          required
          onChange={(e) =>
            setData((info) => ({ ...info, email: e.target.value }))
          }
        />
        <input
          placeholder="- - - -"
          className={styles.input_numbers_recover}
          pattern="\d{4}"
          maxLength="4"
          required
          onChange={(e) =>
            setData((info) => ({ ...info, password: e.target.value }))
          }
        />
        <p>Введите код из 4 цифр</p>
        <button onClick={() => setRestore(false)}>Восстановить</button>
      </form>
    </div>
  );
};

export default RecoveryAccount;
