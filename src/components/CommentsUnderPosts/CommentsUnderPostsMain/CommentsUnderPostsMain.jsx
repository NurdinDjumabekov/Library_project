import React from 'react'
import styles from "./CommentsUnderPostsMain.module.css"
import {useState, useEffect} from 'react'
import axios from 'axios'
import CommentsUnderPostsSingle from '../CommentsUnderPostsSingle/CommentsUnderPostsSingle'

const CommentsUnderPostsMain = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get("https://645ba01fa8f9e4d6e76e0dda.mockapi.io/books/1/comments")
    .then(data => setComments(data.data))
    .finally(console.log(comments))
  }, [])


  return (
    <div className={styles.comments}>
      <div className="container">
        <div className={styles.commentsBlockInner}>
          <h2>Отзывы</h2>
          <div className={styles.commentsBlocks}>
            {comments.map(comment => <CommentsUnderPostsSingle commentDetail={comment} raiting={Math.floor(Math.random() * 5) + 1}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsUnderPostsMain