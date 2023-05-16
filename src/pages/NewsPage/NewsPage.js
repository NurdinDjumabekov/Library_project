import React, { useEffect, useState } from 'react'
import styles from './NewsPage.module.css'
import { NavLink } from 'react-router-dom'

function NewsPage() {
    const [newsList,setNewsList] = useState([
        {name:"Hoвость 1", date: '01-04-2023', time: "17:46"},
        {name:"Hoвость 2", date: '15-04-2023', time: "17:12"},
        {name:"Hoвость 3", date: '15-04-2023', time: "17:13"},
        {name:"Hoвость 4", date: '12-04-2023', time: "11:45"},
        {name:"Hoвость 5", date: '10-04-2023', time: "12:26"},
        {name:"Hoвость 6", date: '01-04-2023', time: "17:46"},
        {name:"Hoвость 7", date: '15-04-2023', time: "17:12"},
        {name:"Hoвость 8", date: '15-04-2023', time: "17:13"},
        {name:"Hoвость 9", date: '12-04-2023', time: "11:45"},
        {name:"Hoвость 10", date: '10-04-2023', time: "12:26"}])
    let sortedNewList = newsList.sort((a,b) => b.time.localeCompare(a.time) )
    sortedNewList = sortedNewList.sort((a,b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse()))
    let time = new Date()
    console. log(time)
    useEffect(() => {
        window.scrollTo(0,0)},[NavLink])
return (
    <div className={styles.cont}>
        <h1><span>Н</span>овости</h1>
        {sortedNewList.map((item,index) =>
        <div className={styles.newsCont} key={index}>
            <h3 className={styles.date}>{item.date}</h3>
            {/* <p className={styles.time}>{item.time}</p>
            <p className={styles.newsHeader}>{item.name}</p> */}
            <div>
                <p className={styles.time}>{item.time}</p>
                <p className={styles.newsHeader}>{item.name}</p>
            </div>
        </div>
        )}

    </div>)
}
export default NewsPage