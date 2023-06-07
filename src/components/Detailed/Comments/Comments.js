import React from "react";
import styles from "./Comments.module.css";

const Comments = ({ comments }) => {
  console.log(comments, "comments");
  return (
    <div className="container">
      <div className={styles.parent_comments}>
        {comments?.map((comment) => (
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
      </div>
    </div>
  );
};

export default Comments;
