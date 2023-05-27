import React, { useEffect, useState } from 'react'
import styles from './NewsPage.module.css'
import News from '../../components/News/News'

function NewsPage() {
    const newsList = [{name:"Новость 1", date: '01-04-2023', time: "17:46"},
    {name:"Новость 2", date: '15-04-2023', time: "17:12"},
    {name:"Новость 3", date: '15-04-2023', time: "17:13"},
    {name:"Новость 4", date: '12-04-2023', time: "11:45"},
    {name:"Новость 5", date: '10-04-2023', time: "12:26"},
    {name:"Новость 6", date: '01-04-2023', time: "17:46"},
    {name:"Новость 7", date: '15-04-2023', time: "17:12"},
    {name:"Новость 8", date: '15-04-2023', time: "17:13"},
    {name:"Новость 9", date: '12-04-2023', time: "11:45"},
    {name:"Новость 10", date: '10-04-2023', time: "12:26"}]
return (
    <div className={styles.cont}>
        <h1><span>Н</span>овости</h1>
        <News newsList={newsList} styles={styles}/>
    </div>
)
}
export default NewsPage