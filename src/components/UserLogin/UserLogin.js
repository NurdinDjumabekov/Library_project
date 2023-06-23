import React, { useState, useEffect } from "react";
import styles from "./UserLogin.module.css";
import { useNavigate } from "react-router-dom";
import {
  changeCheckedUser,
  sendRequestDataEveryUser,
} from "../../store/reducers/usersStateSlice";
import { useDispatch, useSelector } from "react-redux";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [access, setAccess] = useState(localStorage.getItem("access"));
  const { checkedUser, dataEveryUser } = useSelector(
    (state) => state.usersStateSlice
  );
  const { preloader } = useSelector((state) => state.windowsSlice);
  const [data, setData] = useState(null);
  const addBtnLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (access) {
      dispatch(sendRequestDataEveryUser(access));
      dispatch(changeCheckedUser(true));
      setData(JSON.parse(localStorage.getItem("dataUser")));
    } else {
      dispatch(changeCheckedUser(false));
    }
    // console.log(localStorage.getItem("dataUser"));
  }, [preloader]);
  // console.log(data.username, "json-parse");
  return (
    <div className={styles.parent_UserLogin}>
      {checkedUser ? (
        <>
          {data ? (
            <div>
              <p>{data?.username}</p>
              <div>
                <img src={data?.user_photo} alt="user" />
              </div>
            </div>
          ) : (
            <div>
              <p>{dataEveryUser?.username}</p>
              <div>
                <img src={dataEveryUser?.user_photo} alt="user" />
              </div>
            </div>
          )}
        </>
      ) : (
        <button onClick={addBtnLogin}>Вход</button>
      )}
    </div>
  );
};

export default UserLogin;
