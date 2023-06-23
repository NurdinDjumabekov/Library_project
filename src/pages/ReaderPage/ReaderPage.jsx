import React, { useEffect } from 'react'
import HeaderDetailed from '../../components/Detailed/HeaderDetailed/HeaderDetailed'
import Reader from '../../components/Reader/Reader'
import styles from "./ReaderPage.module.css"
import { useState } from 'react'
import axios from 'axios'


const ReaderPage = () => {

    //   useEffect(() => {
    //     axios.get("").then(data => setBookText(data.data))
    //   }, [])
  return (
    <div className={styles.parentReader}>
        <HeaderDetailed/>
        <div className="container">
          <Reader />
        </div>
    </div>
  )
}

export default ReaderPage