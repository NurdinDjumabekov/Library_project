import React, { useEffect } from "react";
import styles from "./Comments.module.css";
import AddComments from "../AddComments/AddComments";
import { useDispatch } from "react-redux";
import { sendRequestComments } from "../../../store/reducers/sendRequestEveryBookSlice";

const Comments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendRequestComments());
  }, []);
  return (
    <>
      {/* <div className="container">
        <div className={styles.parent_comments}>
          {dataDetailedPage.lenght === 0 ? (
            <div className={styles.noComment}>
              <button>Комментарий пока что нет...</button>
            </div>
          ) : (
            <>
              <AddComments />
              <div key={dataDetailedPage.id}>
                <div>
                  <div>
                    <img src={dataDetailedPage.url} alt="img" />
                  </div>
                  <div>
                    <p>{dataDetailedPage.name}</p>
                    <span>{dataDetailedPage.time}</span>
                  </div>
                </div>
                <p>{dataDetailedPage.text}</p>
              </div>
            </>
          )}
        </div>
      </div> */}
    </>
  );
};

export default Comments;
