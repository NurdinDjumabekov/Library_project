import React from "react";
import styles from "./AboutUser.module.css";

const AboutUser = () => {
  const userMan =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrwMvUgClCnBNDMfiBcopM8BgT74epXtu0g&usqp=CAU";
  return (
    <div className={styles.parent_aboutUser}>
      <div className={styles.child_aboutUser}>
        <div className={styles.child_aboutUser_left}>
          <div>
            <img src={userMan} alt="" />
          </div>
          <section>
            <h5>Джумабеков Нурдин</h5>
            <p>djumabekovNurdin@gmail.com</p>
          </section>
        </div>
        <div className={styles.child_aboutUser_right}>
          <button>настройки</button>
        </div>
      </div>
      <div className={styles.line_block}></div>
    </div>
  );
};

export default AboutUser;
