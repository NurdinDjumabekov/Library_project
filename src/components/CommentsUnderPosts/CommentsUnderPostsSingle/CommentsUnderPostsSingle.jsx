import React from 'react'
import styles from "./CommentsUnderPostsSingle.module.css"
import starFull from "../../../assests/images/comments/starYellow.svg"
import starEmpty from "../../../assests/images/comments/starEmpty.svg"
import { useEffect, useState } from "react"

const CommentsUnderPostsSingle = ({commentDetail, raiting}) => {
  // let fullStars = []
  // let emptyStars = []
  const [full, setFull] = useState([])
  const [empty, setEmpty] = useState([])
  const returnStars = (number) => {
    for(let i = 1; i <= number; i++) setFull(prev => {
      return [...prev, i]
    })
    for(let i = 1; i <= 5-number; i++) setEmpty(prev => {
      return [...prev, i]
    })
  }

  useEffect(() => {
    returnStars(raiting)
    console.log("ad");
  }, [raiting])
  

  return (
    <div className={styles.commentBlockSingle}>
      <div className={styles.commentHeader}>
        <div className={styles.avatar}>
          <img src={commentDetail.avatar} alt="" />          
        </div>
        <div>
          <h4>{commentDetail.name}</h4>
          <span>{commentDetail.createdAt.slice(0, 10)}</span>
          <div className={styles.raiting}>
            {full.map(a => <img src={starFull}/>)}
            {empty.map(a => <img src={starEmpty}/>)}
          </div>
        </div>
      </div>
      <div className={styles.commentText}>
        {commentDetail.discription}
      </div>
    </div>
  )
}

export default CommentsUnderPostsSingle