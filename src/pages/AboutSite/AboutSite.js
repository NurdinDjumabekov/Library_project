import React from "react";
import styles from "./AboutSite.module.css";
import NavMenuUsers from "../../components/NavMenuUsers/NavMenuUsers";
import Footer from "../../components/Footer/Footer";

const AboutSite = () => {
  return (
    <div className={styles.parent_aboutSite}>
      <NavMenuUsers />
      <div className="container">
        <div className={styles.child_aboutSite}>
          <div className={styles.inner_aboutSite}>
            <h1>О книжном сайте Muras</h1>
            <h2>Что это такое?</h2>
            <p>
              Muras — это современная библиотека в интернете, которая открывает
              вам доступ к каталогу Кыргызских писателей и классической
              литературы, включая новинки разных жанров.
            </p>
            <p>
              Именно для тех, кто читает много и с удовольствием, мы решили
              сделать Muras.
            </p>
            <h3> Как устроен Muras</h3>
            <p> У нас, как и в обычной библиотеке, нужна регистрация.</p>
            <p>
              Понравившиеся книги добавляйте в список чтения, и всё — книги в
              вашем распоряжении. Их можно читать на сайте через браузер,
              воспользоваться приложением для iPhone и iPad или приложением для
              Android.
            </p>
            <p>
              " Количество книг в цифрах" Это книги, которые можно читать
              бесплатно, достаточно зарегистрироваться. И мы постоянно работаем
              над тем, чтобы в каталоге появлялись всё новые и новые
              издательства и авторы.
            </p>
            <p>
              Если у вас возникли вопросы задайте вопрос почтой, мы обязательно
              ответим.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutSite;
