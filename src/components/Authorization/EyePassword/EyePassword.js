import React from "react";
import styles from "./EyePassword.module.css";
import eye_off from "../../../assests/images/windows/eye-off.svg";
import eye_on from "../../../assests/images/windows/eye-on.svg";

const EyePassword = ({ lookPassword, setDisable }) => {
  //   console.log(lookPassword);
  return (
    <label className={styles.parent_eyeBtn}>
      {lookPassword ? (
        <div
          onClick={() =>
            setDisable((info) => ({ ...info, lookPassword: false }))
          }
        >
          <img src={eye_on} alt="eye" />
        </div>
      ) : (
        <div
          onClick={() =>
            setDisable((info) => ({ ...info, lookPassword: true }))
          }
        >
          <img src={eye_off} alt="eye" />
        </div>
      )}
    </label>
  );
};

export default EyePassword;
