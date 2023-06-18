import React, { useEffect, useState } from "react";
import styles from "./DataEveryUser.module.css";

const DataEveryUser = () => {
  const [data, seData] = useState({});
  useEffect(() => {
    seData(JSON.parse(localStorage.getItem("dataUser")));
  }, []);
  // console.log(data, "ytguhk");
  const imgUrl =
    "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png";

  return (
    <div className={styles.parent_veryUser}>
      <div><img src={imgUrl} alt="Картинка" /></div>
      <p>{data.username}</p>
      <span>asanovasan@gmail.com</span>
    </div>
  );
};

export default DataEveryUser;
