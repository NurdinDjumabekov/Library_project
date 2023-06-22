import React from "react";
import styles from "./Comments.module.css";
import AddComments from "../AddComments/AddComments";

const Comments = ({ dataDetailedPage }) => {
  console.log(dataDetailedPage, "comments");
  return (
    <>
      <div className="container">
        <div className={styles.parent_comments}>
          {dataDetailedPage.lenght === 0 ? (
            <div className={styles.noComment}>
              <p>Комментарий пока что нет...</p>
            </div>
          ) : (
            <>
              <AddComments />
              {dataDetailedPage?.map((comment) => (
                <div key={comment.id}>
                  <div>
                    <div>
                      <img src={comment.url} alt="img" />
                    </div>
                    <div>
                      <p>{comment.name}</p>
                      <span>{comment.time}</span>
                    </div>
                  </div>
                  <p>{comment.text}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Comments;
