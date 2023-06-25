import React, { useEffect, useState } from "react";
import styles from "./SettingUserPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import ChangeDataUser from "../../components/Users/ChangeDataUser/ChangeDataUser";

const SettingUserPage = () => {
  const [user, setUser] = useState({
    choiceData: 0,
    windowsChange: false,
  });
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dataUser"))
  );
  const [password, setPassword] = useState(data.password);

  // console.log(data);

  useEffect(() => {
    const password = "nurdin___545454";
    const arr = Array(password.length - 2).fill("*");
    arr.unshift(...Array(8).fill("*"));
    const result = [...arr, ...password.slice(-2)].join("");
    setPassword(result);
  }, []);

  const dispatch = useDispatch();
  const userImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&usqp=CAU";
  const userInfo = [
    {
      id: 1,
      title: "Отображаемое имя",
      content: data.username,
      btn: "Изменить",
    },
    {
      id: 2,
      title: "Язык сайта",
      content: "Русский",
      btn: "Изменить",
    },
    {
      id: 3,
      title: "Электронная почта",
      content: data.email,
      btn: "Изменить",
    },
    {
      id: 4,
      title: "Пароль",
      content: password,
      btn: "Изменить",
    },
  ];
  const changeStateUser = (type) => {
    setUser((info) => ({
      ...info,
      windowsChange: true,
      choiceData: type,
    }));
  };
  return (
    <>
      <div className={styles.parent_settingUser}>
        <section></section>
        <div className="container">
          <div className={styles.child_settingUser}>
            <div className={styles.nameUser_settingUser}>
              <div>
                <img src={userImg} alt="userImg" />
              </div>
              <div>
                <span>{data.username}</span>
              </div>
            </div>
            <div className={styles.infoUser_settingUser}>
              {userInfo.map((info) => (
                <div key={info.id}>
                  <div>
                    <p>{info.title}</p>
                    <h6>{info.content}</h6>
                  </div>
                  <button onClick={() => changeStateUser(info.id)}>
                    {info.btn}
                  </button>
                </div>
              ))}
            </div>
            {user.windowsChange && (
              <ChangeDataUser setUser={setUser} user={user} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingUserPage;
