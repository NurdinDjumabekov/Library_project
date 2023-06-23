import React, { useEffect, useRef, useState } from "react";
import InputFourDigits from "../../InputFourDigits/InputFourDigits";
import styles from "./RecoveryAccount.module.css";
const initialDigits = ['','','','']
const RecoveryAccount = ({ setRestore }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [digits,setDigits] = useState(initialDigits)
  const ref = useRef()
  const focus = () =>{
    ref.current?.focus()
  }
  useEffect(()=>{
    setData((info) => ({ ...info, password: digits.join('') })) 
  },[digits])
  console.log(data);
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
        <div className={styles.input_numbers_recover}>
          <InputFourDigits ref={ref} digits={digits} onChange={setDigits}/>
        </div>
        <p>Введите код из 4 цифр</p>
        <button onClick={() => setRestore(false)}>Восстановить</button>
      </form>
    </div>
  );
};

export default RecoveryAccount;
