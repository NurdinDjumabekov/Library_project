import React from "react";
import styles from "./AuthorPage.module.css"
import chingiz_a from "../../assests/images/author/Chingiz_A.png"
import book_cover from "../../assests/images/author/book_cover.jpg"
import heart from "../../assests/images/author/heart.svg"

const AuthorPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.author_about}>
                <div className={styles.left}>
                    <div className={styles.left}><img src={chingiz_a} alt=""/>
                        <div className={styles.author_name}><p>Чынгыз Айтматов</p> <span>Писатель</span></div>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>Об авторе</h1>
                    <p>Герой Социалистического Труда (1978), Герой Киргизской Республики (1997), народный писатель Киргизской ССР (1968), академик АН Киргизской ССР (1974), лауреат Ленинской (1963) и трёх Государственных премий СССР (1968, 1977, 1983). Произведения Ч. Айтматова переведены на 174 языка мира, общий тираж его произведений составляет 80 миллионов. По данным СМИ неоднократно номинировался на Нобелевскую премию по литературе.</p>
                </div>
            </div>
            <div className={styles.author_books}>
                <h1>Произведения автора</h1>
                <div className={styles.books}>
                    <div className={styles.book}>
                        <img src={book_cover} alt=""/>
                        <h2>Название книги</h2>
                        <p>Автор книги</p>
                        <div className={styles.hearts}>
                            <img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/>
                        </div>
                    </div>
                    <div className={styles.book}>
                        <img src={book_cover} alt=""/>
                        <h2>Название книги</h2>
                        <p>Автор книги</p>
                        <div className={styles.hearts}>
                            <img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/>
                        </div>
                    </div>
                    <div className={styles.book}>
                        <img src={book_cover} alt=""/>
                        <h2>Название книги</h2>
                        <p>Автор книги</p>
                        <div className={styles.hearts}>
                            <img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/><img src={heart} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorPage