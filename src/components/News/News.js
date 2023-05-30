import React, { useEffect} from 'react'
import { NavLink } from 'react-router-dom'

function News({newsList,styles}) {
    let sortedNewList = newsList.sort((a,b) => b.time.localeCompare(a.time) )
    sortedNewList = sortedNewList.sort((a,b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse()))
    useEffect(() => {
        window.scrollTo(0,0)},[NavLink])
return (
    <>
    {sortedNewList.map((item,index) =>
        <div className={styles.newsCont} key={index}>
            <h3 className={styles.date}>{item.date}</h3>
            <div>
                <p className={styles.time}>{item.time}</p>
                <p className={styles.newsHeader}>{item.name}</p>
            </div>
        </div>
        )}</>
)
}

export default News