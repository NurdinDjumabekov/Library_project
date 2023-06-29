import React, { useEffect, useState } from "react";
import styles from "./ChangeDataUser.module.css";
import { useDispatch } from "react-redux";
import { changeDataUser } from "../../../store/reducers/windowsSlice";
import { sendRequestDataEveryUser } from "../../../store/reducers/usersStateSlice";
// import { changeDataUser } from "../../helpers/helpers";

const ChangeDataUser = ({ setUser, user }) => {
  const dispatch = useDispatch();
  const [change, setChange] = useState({
    password: "",
    new_password: "",
    repeatNew_password: "",
    name: "",
    language: "",
    email: "",
  });
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dataUser"))
  );
  // console.log(data.password);
  useEffect(() => {
    dispatch(sendRequestDataEveryUser(localStorage.getItem("access")));
  }, []);

  const sendRequest = (type) => {
    dispatch(changeDataUser({ type: type, change: change }));
    setUser((info) => ({
      ...info,
      windowsChange: false,
    }));
    dispatch(sendRequestDataEveryUser(localStorage.getItem("access")));
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
          <div>
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
          <div>
            <h6>Изменить электронную почту</h6>
            <p>Введите новую лектронную почту</p>
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
            <p>Введите пароль</p>
            <input
              onChange={(e) =>
                setChange((info) => ({
                  ...info,
                  password: e.target.value,
                }))
              }
              placeholder="пароль"
              required
              type="password"
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
                Изменить
              </button>
            </div>
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
          <div>
            <h6>Изменить пароль</h6>
            <p>Введите действующий пароль</p>
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
            <p>Введите новый пароль</p>
            <input
              onChange={(e) =>
                setChange((info) => ({
                  ...info,
                  new_password: e.target.value,
                }))
              }
              placeholder="*****************"
              required
            />
            <p>Повторите новый пароль</p>
            <input
              onChange={(e) =>
                setChange((info) => ({
                  ...info,
                  repeatNew_password: e.target.value,
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
        </div>
      </>
    );
  }
};

export default ChangeDataUser;
