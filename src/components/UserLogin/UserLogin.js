import React, { useState } from "react";
import styles from "./UserLogin.module.css";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [haveLogin, setHaveLogin] = useState(true);
  const addBtnLogin = () => {
    setHaveLogin(false);
    navigate("/login");
  };
  return (
    <div className={styles.parent_UserLogin}>
      {haveLogin && <button onClick={addBtnLogin}>Вход</button>}
    </div>
  );
};

export default UserLogin;
