import React, { useState } from 'react'
import styles from './ReadNow.module.css'
import userImg from '../../assests/images/readNowImages/Ellipse 25.svg'
import bookImg from '../../assests/images/readNowImages/image 14.svg'
import allBooksImg from '../../assests/images/readNowImages/books 25.svg'
import beautyBookImg from '../../assests/images/readNowImages/beauty 15.svg'
import btnPlay from '../../assests/images/readNowImages/btn googlePlay.svg'
import favHeart from '../../assests/images/readNowImages/favoritesHeart.svg'
function ReadNow() {

    const [log, setLog] = useState(false)
    
  return log 
  ? (
    <div className={styles.parent_read}>
        <div className='container'>
            <div className={styles.read_inner}>
                <h1 className={styles.read_text}>Вы недавно читали</h1>
                <div className={styles.all_info}>
                    <div className={styles.profile_user}>
                      <img src={userImg} alt="user" className={styles.user_avatar}/> 
                      <div className={styles.user_name}>
                        <span>Maximillian Antonov</span>
                        <span>Писатель, Художник</span>
                      </div>
                    </div>
                    <div className={styles.info_book}>
                      <h3 className={styles.book_name}>"Эпос Манас"</h3>
                      <img src={bookImg} alt="" className={styles.this_book}/>
                      <img src={favHeart} alt="fav" className={styles.heart_img}/>
                    </div>
                    <div className={styles.navigation_book}>
                        <span className={styles.page_info}>Глава 4, страница 389.</span>
                        <p className={styles.page_warning}>Вы читали эту книгу 4 дня назад</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ) 
  : (
    <>
      <div className={styles.parent_read}>
        <div className='container'>
          <div className={styles.regis_read_inner}>
            <div className={styles.regis_info}>
              <span className={styles.regis_text}>Чтобы иметь доступ к богатому наследию литературы и культуры нашей страны, пожалуйста, зарегистрируйтесь</span>
              <div style={{width: '622px', display: 'flex', justifyContent: 'end'}}>
                <button className={styles.regis_btn}>Регистрация</button>
              </div>
            </div>
            <img src={allBooksImg} alt="books" className={styles.books_svg}/>
          </div>
        </div>
      </div>
      <div className={styles.mobile_parent}>
        <div className='container'> 
          <div className={styles.mobile_inner}>
            <div className={styles.mobile_info}>
              <img src={beautyBookImg} alt="books" className={styles.beauty_book}/>
              <h1 className={styles.text_mobile}>Читайте книги великих кыргызских писателей на нашем сайте или скачайте приложение   “Мурас” в Google Play бесплатно.</h1>
            </div>
            <div style={{width: '986px', display: 'flex', justifyContent: 'end'}}>
              <img src={btnPlay} alt="play" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadNow