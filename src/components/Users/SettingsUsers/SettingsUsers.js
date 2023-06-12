import React, { useEffect, useState } from "react";
import styles from "./SettingsUsers.module.css";
import setting_img from "../../../assests/images/Setting/setting.svg";
import { useDispatch, useSelector } from "react-redux";
import { toTakeDataUsers } from "../../../store/reducers/windowsSlice";
import MainDataUser from "../MainDataUser/MainDataUser";
import MoreInfoUser from "../MoreInfoUser/MoreInfoUser";

const SettingsUsers = () => {
  const { dataUsers } = useSelector((state) => state.windowsSlice);
  // console.log(dataUsers[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toTakeDataUsers());
  }, []);
  return (
    <div className={styles.parent_settingUser}>
      <div>
        <h5>Настройки</h5>
        <div>
          <img src={setting_img} alt="setting_img" />
        </div>
      </div>
      <div className="container">
        <div className={styles.child_settingUser}>
          <MainDataUser dataUsers={dataUsers} />
          <MoreInfoUser />
        </div>
      </div>
    </div>
  );
};

export default SettingsUsers;
