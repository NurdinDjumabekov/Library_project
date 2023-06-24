import React, { useEffect, useState } from "react";
import styles from "./SettingUserPage.module.css";
import checkmark_img from "../../assests/images/windows/checkmark-circle-light.svg"
import xmark_img from "../../assests/images/windows/xmark-circle-light.svg"
import { useDispatch, useSelector } from "react-redux";
import ChangeDataUser from "../../components/Users/ChangeDataUser/ChangeDataUser";
import { toTakeDataUsers } from "../../store/reducers/windowsSlice";
import Preloader from "../../components/Preloader/Preloader";
import { style } from "@mui/system";

const SettingUserPage = () => {
  const { dataUsers } = useSelector((state) => state.windowsSlice);
  const [user, setUser] = useState({
    choiceData: 0,
    windowsChange: false,
  });
  const [patchResp, setPatchResp] = useState(404)
  const [popUpWindow, setPopUpWindow] = useState(false)
  const {preloader} = useSelector((state) => state.windowsSlice)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toTakeDataUsers());
  }, []);
  const userImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&usqp=CAU";
  const userInfo = [
    {
      id: 1,
      title: "Отображаемое имя",
      content: "Asanov Azat",
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
      content: "asanovazat@gmail.com",
      btn: "Изменить",
    },
    {
      id: 4,
      title: "Пароль",
      content: "glebasik22_09",
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
      {preloader ? ( 
        <Preloader/> 
      ) : (
        <div className={styles.parent_settingUser}>
          
          {popUpWindow ? (patchResp === 200 ? (
            <div className={styles.popUpWindow} id="pop">
              <div><img src={checkmark_img}/></div>
              <span>Изменения сохранены</span>
            </div>
            ) :
            (
              <div className={styles.popUpWindow} id="pop">
                <div><img src={xmark_img}/></div>
                <span>Изменения сохранены</span>
              </div>
            )) : null
          }
          
          <section></section>
          <div className="container">
            <div className={styles.child_settingUser}>
              <div className={styles.nameUser_settingUser}>
                <div>
                  <img src={userImg} alt="userImg" />
                </div>
                <div>
                  <span>Asanov</span>
                  <span>Azat</span>
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
                <ChangeDataUser setUser={setUser} user={user} setPatchResp={(resp) => {
                  resp.then(resp => setPatchResp(resp.payload))
                  setPopUpWindow(true)
                  setTimeout(() => {
                    setPopUpWindow(false)
                    setPatchResp(0)
                  }, 3000)
                }}/>
              )}
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};

export default SettingUserPage;
