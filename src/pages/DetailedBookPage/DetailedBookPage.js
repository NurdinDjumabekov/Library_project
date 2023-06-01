import React from "react";
import styles from "./DetailedBookPage.module.css";
import page_book from "../../assests/images/Detailed/page_book.png";
import info_book from "../../assests/images/Detailed/info_book.png";
import CommentsUnderPosts from "../../components/CommentsUnderPosts/CommentsUnderPosts";
import InfoAboutBook from "../../components/InfoAboutBook/InfoAboutBook";

const DetailedBookPage = () => {

  return (
    <>
      <div className={styles.parent_detailed}>
        <div className={styles.child_detailed}>
          <div className={styles.detailed_header}>
            <div className="container">
              <div className={styles.detailed_header_inner}>
                <div>
                  <img src={info_book} alt="info_book" />
                </div>
                <section>
                  <h1>Чингиз Айтматов “Плаха”</h1>
                  <p>
                    "Плаха" - это глубокое и мудрое произведение, которое
                    показывает, что любовь и семейные отношения могут быть
                    сложными и противоречивыми, но важно оставаться верным своим
                    принципам и искать свое место в мире.
                  </p>
                  <div>
                    <button>Читать книгу</button>
                  </div>
                </section>
              </div>
            </div>
            <div className={styles.about_book}>
              <div className="container"></div>
            </div>
          </div>
          <div className={styles.detailed_text}>
                <h2>Краткое содержание</h2>
                <p>
                  "Плаха" - это произведение Чингиза Айтматова, опубликованное в
                  1962 году. Оно рассказывает историю человека по имени Жакып,
                  который после смерти отца пытается обрести свой путь в жизни.
                  Жакып уходит из деревни и работает на стройке в городе, где он
                  встречает свою первую любовь, Култай. Однако, Култай вынуждена
                  уехать в столицу, и Жакып продолжает работать и ждать ее
                  возвращения. Вскоре Жакып узнает о том, что Култай забеременела
                  от другого мужчины и вернулась в деревню. Жакып решает найти ее
                  и жениться, несмотря на ее беременность и ее прошлое.
                </p>
                <p>В
                  произведении многое рассказывается о жизни в Киргизии и о том,
                  как люди там живут. Описывается жизнь деревенских жителей, их
                  обычаи и традиции, а также их связь с природой. Также много
                  внимания уделено теме любви и семейных отношений, а также
                  исследованию духовных и моральных проблем человеческой жизни. В
                  "Плахе" также затрагивается тема судьбы и выбора. Герой
                  сталкивается с выбором между своей любовью к Култай и ее
                  прошлым, и своей жизненной целью, которую он стремится достичь.
                  Он решает, что необходимо брать ответственность за свои действия
                  и принимать жизненные решения, которые будут соответствовать его
                  моральным и духовным убеждениям.</p>
            </div>
            <div className={styles.book_about}>
              <h2>Информация о книге</h2>
              <div className={styles.inner_about}>
                <div className={styles.left}>
                  <div className="lines">
                    <div className={styles.line}><p>Автор:</p> <p>Чингиз Айтматов</p></div>
                    <div className={styles.line}><p>Год публикации:</p> <p>1962 г.</p></div>
                    <div className={styles.line}><p>Жанр:</p> <p>Роман</p></div>
                    <div className={styles.line}><p>Рейтинг:</p></div>
                    <div className={styles.line}><p>Количество страниц:</p> <p>250</p></div>
                  </div>
                  <div className={styles.about_desc}><p>"Плаха" является одним из наиболее известных произведений Чингиза Айтматова, который считается одним из величайших писателей Киргизии и Центральной Азии в XX веке. Роман был переведен на многие языки мира и оказал значительное влияние на развитие киргизской литературы и культуры.</p></div>
                </div>
                <div className={styles.right}><img src={info_book} alt="info_book" /></div>
              </div>
            </div>
          <InfoAboutBook />
          <CommentsUnderPosts />
        </div>
      </div>
    </>
  );
};

export default DetailedBookPage;
