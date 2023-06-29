import React, { useEffect, useRef, useState } from "react";
import styles from "./SettingUserPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import ChangeDataUser from "../../components/Users/ChangeDataUser/ChangeDataUser";
import LogOut from "../../components/Authorization/LogOut/LogOut";
import editImg from "../../assests/images/Setting/edit_photo.svg";
import { sendRequestEditUserPhoto } from "../../store/reducers/windowsSlice";

const SettingUserPage = () => {
  const [user, setUser] = useState({
    choiceData: 0,
    windowsChange: false,
  });
  const [newPhoto, setNewPhoto] = useState(null);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dataUser"))
  );
  const [password, setPassword] = useState("***");
  // console.log(password);

  // useEffect(() => {
  //   setData(JSON.parse(localStorage.getItem("dataUser")));
  //   setPassword(data?.password);
  // }, [user]);

  // console.log(data);
  const convertPassword = (info) => {
    const startInfo = info.slice(0, info.length - 2);
    const endInfo = info.slice(info.length - 2);
    // console.log(startInfo);
    // console.log(endInfo);
    const result =
      startInfo
        .split("")
        .map((i) => {
          return (i = "*");
        })
        .join()
        .replace(/,/g, "") + endInfo;
    // console.log(result);
    setPassword(result);
  };

  useEffect(() => {
    convertPassword(data?.password);
  }, []);
  // console.log(password);

  const dispatch = useDispatch();
  const userImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&usqp=CAU";
  const userInfo = [
    {
      id: 1,
      title: "Отображаемое имя",
      content: data?.username,
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
      content: data?.email,
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
  const inputRef = useRef(null);
  const openImages = () => {
    inputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const image = e.target.files[0];
    dispatch(sendRequestEditUserPhoto(image));
  };
  return (
    <>
      <div className={styles.parent_settingUser}>
        <section></section>
        <div className="container">
          <div className={styles.child_settingUser}>
            <div className={styles.nameUser_settingUser}>
              <div>
                <img src={data?.user_photo} alt="userImg" />
                <button onClick={() => openImages()}>
                  <input
                    ref={inputRef}
                    className={styles.input_addPhoto}
                    type="file"
                    onChange={handlePhotoChange}
                  />
                  <img src={editImg} alt="edit" />
                </button>
              </div>
              <div>
                <span>{data?.username}</span>
              </div>
            </div>
            <div className={styles.infoUser_settingUser}>
              {userInfo?.map((info) => (
                <div key={info.id}>
                  <div>
                    <p>{info?.title}</p>
                    <h6>{info?.content}</h6>
                  </div>
                  <button onClick={() => changeStateUser(info.id)}>
                    {info?.btn}
                  </button>
                </div>
              ))}
            </div>
            {user.windowsChange && (
              <ChangeDataUser setUser={setUser} user={user} />
            )}
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingUserPage;
