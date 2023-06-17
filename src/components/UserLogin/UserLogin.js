import React, { useState, useEffect } from "react";
import styles from "./UserLogin.module.css";
import { useNavigate } from "react-router-dom";
import { sendRequestDataEveryUser } from "../../store/reducers/usersStateSlice";
import { useDispatch } from "react-redux";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkedUser, setCheckedUser] = useState(false);
  const addBtnLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    // console.log(localStorage.getItem("access"));
    const access = localStorage.getItem("access");
    if (access) {
      dispatch(sendRequestDataEveryUser(access));
      setCheckedUser(true);
    } else {
      setCheckedUser(false);
    }
  }, []);
  return (
    <div className={styles.parent_UserLogin}>
      {checkedUser ? "" : <button onClick={addBtnLogin}>Вход</button>}
    </div>
  );
};

export default UserLogin;
