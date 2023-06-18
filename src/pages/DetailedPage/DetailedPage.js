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
  const { allData } = useSelector((state) => state.sendRequestLibraryPageSlice);
  //   console.log(allData, "allData detailedPage");
  // useEffect(() => {
  //   dispatch(requestAllData());
  // }, []);
  const { id } = useParams();
  useEffect(() => {
    dispatch(detailedData());
  }, []);

  return (
    <div className={styles.parent_detailed}>
      <HeaderDetailed />
      <div className="container">
        <div className={styles.short_description}>
          <h2>Краткое содержание </h2>
          <p>
            "Плаха" - это произведение Чингиза Айтматова, опубликованное в 1962
            году. Оно рассказывает историю человека по имени Жакып, который
            после смерти отца пытается обрести свой путь в жизни. Жакып уходит
            из деревни и работает на стройке в городе, где он встречает свою
            первую любовь, Култай. Однако, Култай вынуждена уехать в столицу, и
            Жакып продолжает работать и ждать ее возвращения. Вскоре Жакып
            узнает о том, что Култай забеременела от другого мужчины и вернулась
            в деревню. Жакып решает найти ее и жениться, несмотря на ее
            беременность и ее прошлое. В произведении многое рассказывается о
            жизни в Киргизии и о том, как люди там живут. Описывается жизнь
            деревенских жителей, их обычаи и традиции, а также их связь с
            природой. Также много внимания уделено теме любви и семейных
            отношений, а также исследованию духовных и моральных проблем
            человеческой жизни. В "Плахе" также затрагивается тема судьбы и
            выбора. В произведении многое рассказывается о жизни в Киргизии и о
            том, как люди там живут. Описывается жизнь деревенских жителей, их
            обычаи и традиции, а также их связь с природой. Также много внимания
            уделено теме любви и семейных отношений, а также исследованию
            духовных и моральных проблем человеческой жизни. В "Плахе" также
            затрагивается тема судьбы и выбора.
          </p>
        </div>
        <div className={styles.comments_parent}>
          <h3>Отзывы</h3>
          <Comments comments={allData[0]?.comments} />
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
