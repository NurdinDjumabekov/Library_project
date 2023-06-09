import React from "react";
import styles from "./LevelPassword.module.css";
import { useSelector } from "react-redux";

const LevelPassword = () => {
  const { difficultPassword } = useSelector((state) => state.windowsSlice);
  //   console.log(difficultPassword, "difficultPassword");
  const difficult_Styles = {
    display: "flex",
    width: `${difficultPassword.width}px`,
    height: "15px",
    backgroundColor: `${difficultPassword.color}`,
    borderRadius: "8px",
  };
  return (
    <label className={styles.parent_levelPassword}>
      <div style={difficult_Styles}></div>
      <p></p>
    </label>
  );
};

export default LevelPassword;
