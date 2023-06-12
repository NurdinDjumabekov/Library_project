import React, { useState } from "react";
import styles from "./MainDataUser.module.css";

const MainDataUser = ({ dataUsers }) => {
  const [change, setChange] = useState({
    mainImg: false,
    emailUser: false,
  });
  return (
    <div className={styles.parent_mainDataUser}>
      <div className={styles.block_changeUserImg}>
        <div>
          <img src={dataUsers[0]?.userUrl} alt="userImg" />
        </div>
        <div>
          <div>
            <img src={dataUsers[0]?.userUrl} alt="userImg" />
          </div>
          <button
            onClick={() =>
              setChange((info) => ({
                ...info,
                mainImg: true,
              }))
            }
          >
            Сменить фото
          </button>
        </div>
      </div>
      <div className={styles.block_changeUserEmail}>
        <h5>Электронная почта</h5>
        <p>{dataUsers[0]?.email}saddddddddddddddddddddddddddddddddddddddddd</p>
        <button
          onClick={() =>
            setChange((info) => ({
              ...info,
              emailUser: true,
            }))
          }
        >
          Изменить
        </button>
      </div>
    </div>
  );
};

export default MainDataUser;
