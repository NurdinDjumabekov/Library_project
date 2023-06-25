import React, { useEffect } from "react";
import styles from "./Comments.module.css";
import { useDispatch } from "react-redux";
// import { sendRequestComments } from "../../../store/reducers/sendRequestEveryBookSlice";
import Rating_Star from "../../Sliders/SlidersMainPage/Rating_Star/Rating_Star";

const Comments = ({ dataDetailedPage }) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(sendRequestComments());
  // }, []);
  // console.log(dataDetailedPage.reviews);
  return (
    <>
      <div className="container">
        <div className={styles.parent_comments}>
          {dataDetailedPage?.reviews?.length === 0 ? (
            <div className={styles.noComment}>
              <p>Комментарий пока что нет...</p>
            </div>
          ) : (
            <>
              {dataDetailedPage?.reviews?.map((comment) => (
                <div key={comment.id}>
                  <div>
                    <div>
                      <img src={comment.profile.user_photo} alt="img" />
                    </div>
                    <div>
                      <p>{comment.profile.username}</p>
                      <span>{comment.created_date}</span>
                      {/* <button>{comment.user_stars.value}</button> */}
                      <div>
                        <Rating_Star
                          grade_star={comment.user_stars.value}
                          grade={comment.user_stars.value}
                        />
                      </div>
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
