import React from "react";

const NoData = () => {
  const style = {
    width: "100%",
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#7C7C7C",
    fontSize: "60px",
    // background: "red",
  };
  return (
    <div style={style}>
      <p>Нет результатов</p>
    </div>
  );
};

export default NoData;
