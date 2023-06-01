import React from "react";
import styles from "./BasketBook.module.css";
import NavMenuUsers from "../../components/NavMenuUsers/NavMenuUsers";
import Footer from "../../components/Footer/Footer";
import info_book from "../../assests/images/Detailed/info_book.png";


const BasketBook = () => {
  return (
    <div className={styles.parent_aboutSite}>
      <NavMenuUsers />
      <div className="container">
        <div className={styles.child_aboutSite}>
            <div className={styles.basket_line}>
                <div className={styles.left}>
                    <div className={styles.book}><img src={info_book} alt="info_book"/></div>
                    <div className={styles.desc}><h2>Название книги</h2> <p>Автор книги</p></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.added}><h3>Добавлено в корзину</h3> <p>01.06.2023</p></div>
                    <div className={styles.buttons}><button className={styles.button1}>Вернуть</button><button className={styles.button2}>Удалить</button></div>
                </div>
            </div>
            <div className={styles.basket_line}>
                <div className={styles.left}>
                    <div className={styles.book}><img src={info_book} alt="info_book"/></div>
                    <div className={styles.desc}><h2>Название книги</h2> <p>Автор книги</p></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.added}><h3>Добавлено в корзину</h3> <p>01.06.2023</p></div>
                    <div className={styles.buttons}><button className={styles.button1}>Вернуть</button><button className={styles.button2}>Удалить</button></div>
                </div>
            </div>
            <div className={styles.basket_line}>
                <div className={styles.left}>
                    <div className={styles.book}><img src={info_book} alt="info_book"/></div>
                    <div className={styles.desc}><h2>Название книги</h2> <p>Автор книги</p></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.added}><h3>Добавлено в корзину</h3> <p>01.06.2023</p></div>
                    <div className={styles.buttons}><button className={styles.button1}>Вернуть</button><button className={styles.button2}>Удалить</button></div>
                </div>
            </div>
            <div className={styles.basket_line}>
                <div className={styles.left}>
                    <div className={styles.book}><img src={info_book} alt="info_book"/></div>
                    <div className={styles.desc}><h2>Название книги</h2> <p>Автор книги</p></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.added}><h3>Добавлено в корзину</h3> <p>01.06.2023</p></div>
                    <div className={styles.buttons}><button className={styles.button1}>Вернуть</button><button className={styles.button2}>Удалить</button></div>
                </div>
            </div>
            <div className={styles.basket_line}>
                <div className={styles.left}>
                    <div className={styles.book}><img src={info_book} alt="info_book"/></div>
                    <div className={styles.desc}><h2>Название книги</h2> <p>Автор книги</p></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.added}><h3>Добавлено в корзину</h3> <p>01.06.2023</p></div>
                    <div className={styles.buttons}><button className={styles.button1}>Вернуть</button><button className={styles.button2}>Удалить</button></div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasketBook;
