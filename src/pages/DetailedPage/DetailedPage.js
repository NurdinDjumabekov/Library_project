import React, { useEffect } from "react";
import styles from "./DetailedPage.module.css";
import HeaderDetailed from "../../components/Detailed/HeaderDetailed/HeaderDetailed";
import Comments from "../../components/Detailed/Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import { requestAllData } from "../../store/reducers/sendRequestLibraryPageSlice";
import { useParams } from "react-router-dom";
import { detailedData } from "../../store/reducers/sendRequestMainPageSlice";

const DetailedPage = () => {
  const dispatch = useDispatch();
  const { dataDetailedPage } = useSelector(
    (state) => state.sendRequestMainPageSlice
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(detailedData(id));
  }, []);

  console.log(dataDetailedPage, "dataDetailedPage");
  return (
    <div className={styles.parent_detailed}>
      <HeaderDetailed dataDetailedPage={dataDetailedPage} />
      <div className="container">
        <div className={styles.short_description}>
          <h2>Краткое содержание </h2>
          <p>{dataDetailedPage.summary}</p>
        </div>
        <div className={styles.comments_parent}>
          <h3>Отзывы</h3>
          {/* <Comments comments={allData[0]?.comments} /> */}
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
