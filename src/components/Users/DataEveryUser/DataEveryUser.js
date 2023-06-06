import React from "react";
import styles from "./DataEveryUser.module.css";

const DataEveryUser = () => {
  const imgUrl =
    "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png";
  return (
    <div className={styles.parent_veryUser}>
      <h5>
        Привет <span>Нурдин</span>
      </h5>
      <div>
        <img src={imgUrl} alt="Картинка" />
      </div>
      <p>Asanov Asan</p>
      <span>asanovasan@gmail.com</span>
    </div>
  );
};

export default DataEveryUser;
