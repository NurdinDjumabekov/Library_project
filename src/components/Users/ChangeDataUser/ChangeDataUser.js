import React, { useState } from "react";
import styles from "./ChangeDataUser.module.css";
import { changeDataUser } from "../../helpers/helpers";

const ChangeDataUser = ({ setUser, user }) => {
  const [change, setChange] = useState({
    password: "",
    name: "",
    language: "",
    email: "",
  });

  const sendRequest = (type) => {
    // console.log(type);
    if (type === 1) {
      changeDataUser(change);
    }
  };

  if (user.choiceData === 1) {
    return (
      <>
        <div
          className={styles.back_shadow_changeData}
          onClick={() =>
            setUser((info) => ({
              ...info,
              windowsChange: false,
            }))
          }
        ></div>
        <div className={styles.parent_changeData}>
          <h6>Изменить отображаемое имя</h6>
          <p>Отображаемое имя</p>
          <input
            onChange={(e) =>
              setChange((info) => ({
                ...info,
                name: e.target.value,
              }))
            }
            placeholder="Джумабеков Нурдин"
            required
          />
          <div>
            <button
              onClick={() =>
                setUser((info) => ({
                  ...info,
                  windowsChange: false,
                }))
              }
            >
              Отмена
            </button>
            <button onClick={() => sendRequest(user.choiceData)}>
              Сохранить
            </button>
          </div>
        </div>
      </>
    );
  } else if (user.choiceData === 3) {
    return (
      <>
        <div
          className={styles.back_shadow_changeData}
          onClick={() =>
            setUser((info) => ({
              ...info,
              windowsChange: false,
            }))
          }
        ></div>
        <div className={styles.parent_changeData}>
          <h6>Изменить электронную почту</h6>
          <p>Электронная почта</p>
          <input
            onChange={(e) =>
              setChange((info) => ({
                ...info,
                email: e.target.value,
              }))
            }
            placeholder="Джумабеков Нурдин"
            required
          />
          <div>
            <button
              onClick={() =>
                setUser((info) => ({
                  ...info,
                  windowsChange: false,
                }))
              }
            >
              Отмена
            </button>
            <button onClick={() => sendRequest(user.choiceData)}>
              Сохранить
            </button>
          </div>
        </div>
      </>
    );
  } else if (user.choiceData === 4) {
    return (
      <>
        <div
          className={styles.back_shadow_changeData}
          onClick={() =>
            setUser((info) => ({
              ...info,
              windowsChange: false,
            }))
          }
        ></div>
        <div className={styles.parent_changeData}>
          <h6>Изменить пароль</h6>
          <p>Ваш пароль</p>
          <input
            onChange={(e) =>
              setChange((info) => ({
                ...info,
                password: e.target.value,
              }))
            }
            placeholder="*****************"
            required
          />
          <div>
            <button
              onClick={() =>
                setUser((info) => ({
                  ...info,
                  windowsChange: false,
                }))
              }
            >
              Отмена
            </button>
            <button onClick={() => sendRequest(user.choiceData)}>
              Сохранить
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default ChangeDataUser;
