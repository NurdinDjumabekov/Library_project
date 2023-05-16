import React from 'react'
import styles from "./AuthorsRecommendation.module.css"
import Sliders_recomm from '../Sliders/Sliders_recommendation/Sliders_recomm'

const AuthorsRecommendation = () => {
    const authorInfoList = [
        {
            name: "Чингиз Айтматов",
            description: "Lorem ipsum dolor sit amet consectetur. Turpis ultricies tincidunt lorem aenean nunc sociis diam.",
            rewards: "Aliquet convallis pulvinar vulputate in risus. Luctus mattis maecenas leo risus venenatis libero. Sed dolor venenatis lacus rhoncus viverra at enim curabitur metus.",
            writtedBooks: "Dui cursus pellentesque ut lectus. Morbi tortor arcu faucibus adipiscing. In a sagittis est fringilla lacinia amet faucibus. Ac nisl a amet non hac quis tempor quisque quam.",
            id: 1
        },
        {
            name: "Садыр Жапаров",
            description: "Lorem ipsum dolor sit amet consectetur. Turpis ultricies tincidunt lorem aenean nunc sociis diam.",
            rewards: "Aliquet convallis pulvinar vulputate in risus. Luctus mattis maecenas leo risus venenatis libero. Sed dolor venenatis lacus rhoncus viverra at enim curabitur metus.",
            writtedBooks: "Dui cursus pellentesque ut lectus. Morbi tortor arcu faucibus adipiscing. In a sagittis est fringilla lacinia amet faucibus. Ac nisl a amet non hac quis tempor quisque quam.",
            id: 1
        }
      ]
    
  return (
    <div className={styles.parent_authorRecommendation}>
        <div className="container">
            <div className={styles.child_authorRecommendation}>
                <Sliders_recomm postsList={authorInfoList} slidesToShow={1}/>
            </div>
        </div>
    </div>

  )
}

export default AuthorsRecommendation