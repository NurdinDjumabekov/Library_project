import React, { useState, useEffect } from "react";
import styles from "./ChangeDataUser.module.css";
import { changeDataUser } from "../../helpers/helpers";
import { useDispatch } from "react-redux";
import { patchRequestToDataUsers } from "../../../store/reducers/windowsSlice";

const ChangeDataUser = ({ setUser, user, setPatchResp }) => {
  const dispatch = useDispatch()
  const [change, setChange] = useState({
    // password: "",
    // name: "",
    // language: "",
    // email: "",
  });

  const sendRequest = async(type) => {
    // console.log(type);
    // if (type === 1) {
    //   changeDataUser(change);
      /////helpers/////
      // }
    setPatchResp(dispatch(patchRequestToDataUsers(change)))
    // dispatch(patchRequestToDataUsers(change))
    
    setUser((info) => ({
      ...info,
      windowsChange: false,
    }))
    console.log(change);
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
          <div className={styles.parent_inputBlock}>
            <div>
              <p>Отображаемое имя</p>
              <input
                onChange={(e) =>
                  setChange((info) => ({
                    // ...info,
                    name: e.target.value,
                  }))
                }
                placeholder="Джумабеков Нурдин"
                type="text"
                required
              />
            </div>
          </div>
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
          <div className={styles.parent_inputBlock}>
            <div>
              <p>Введите новую лектронную почту</p>
              <input
                onChange={(e) =>
                  setChange((info) => ({
                    // ...info,
                    email: e.target.value,
                  }))
                }
                type="text"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <p>Введите пароль</p>
              <input
                onChange={(e) =>
                  setChange((info) => ({
                    // ...info,
                    password: e.target.value,
                  }))
                }
                placeholder="*****************"
                type="text"
                required
              />
            </div>

          </div>
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
          <div className={styles.parent_inputBlock}>
            <div>
              <p>Введите действующий пароль</p>
              <input
                onChange={(e) =>
                  setChange((info) => ({
                    // ...info,
                    password: e.target.value,
                  }))
                }
                placeholder="*****************"
                type="text"
                required
              />
            </div>
            <div>
              <p>Введите новый пароль</p>
              <input
                onChange={(e) =>
                  setChange((info) => ({
                    // ...info,
                    password: e.target.value,
                  }))
                }
                placeholder="*****************"
                type="text"
                required
              />
            </div>
            <div>
              <p>Повторите новый пароль</p>
              <input
                onChange={(e) =>
                  setChange((info) => ({
                    // ...info,
                    password: e.target.value,
                  }))
                }
                placeholder="*****************"
                type="text"
                required
              />
            </div>
          </div>
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
