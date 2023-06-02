import React, {useEffect, useState} from "react";
import styles from "./BasketBook.module.css";
import NavMenuUsers from "../../components/NavMenuUsers/NavMenuUsers";
import Footer from "../../components/Footer/Footer";
import info_book from "../../assests/images/Detailed/info_book.png";
import axios from "axios";


const BasketBook = () => {

  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
  axios.get('https://647a2b1ea455e257fa6469e5.mockapi.io/authors_books_and_genres')
    .then(response => {
      const data = response.data;

      const authors = data.map(item => item.authors)
      const books = data.map(item => item.books)
      const id = data.map(item => item.id)
      console.log(id)

      setAuthors(authors);
      setBooks(books);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

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
