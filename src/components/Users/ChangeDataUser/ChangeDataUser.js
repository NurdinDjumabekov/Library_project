import React, { useEffect, useState } from "react";
import styles from "./ChangeDataUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeDataUser } from "../../../store/reducers/windowsSlice";
import {
  changeFakeData,
  sendRequestDataEveryUser,
} from "../../../store/reducers/usersStateSlice";
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
    // 1 - name
    // 2 - язык
    // 3 - email
    // 4 - password
    // 5 - img
    if (type === 1) {
      dispatch(
        changeFakeData({
          type: 1,
          name: change.name,
        })
      );
    } else if (type === 3) {
      dispatch(
        changeFakeData({
          type: 3,
          email: change.email,
        })
      );
    } else if (type === 4) {
      dispatch(
        changeFakeData({
          type: 4,
          password: change.new_password,
        })
      );
    }
    ///////////////////////
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
            <form onSubmit={() => sendRequest(user.choiceData)}>
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
                <button type="submit">Сохранить</button>
              </div>
            </form>
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
            <form onSubmit={() => sendRequest(user.choiceData)}>
              <input
                type="email"
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
                <button type="submit">Изменить</button>
              </div>
            </form>
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
            <form onSubmit={() => sendRequest(user.choiceData)}>
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
                <button type="submit">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default ChangeDataUser;
