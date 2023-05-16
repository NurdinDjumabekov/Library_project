import React from 'react'
import styles from './NewsPage.module.css'
import News from '../../components/News'

function NewsPage() {
    const newsList = [{name:"Hoвость 1", date: '01-04-2023', time: "17:46"},
    {name:"Hoвость 2", date: '15-04-2023', time: "17:12"},
    {name:"Hoвость 3", date: '15-04-2023', time: "17:13"},
    {name:"Hoвость 4", date: '12-04-2023', time: "11:45"},
    {name:"Hoвость 5", date: '10-04-2023', time: "12:26"},
    {name:"Hoвость 6", date: '01-04-2023', time: "17:46"},
    {name:"Hoвость 7", date: '15-04-2023', time: "17:12"},
    {name:"Hoвость 8", date: '15-04-2023', time: "17:13"},
    {name:"Hoвость 9", date: '12-04-2023', time: "11:45"},
    {name:"Hoвость 10", date: '10-04-2023', time: "12:26"}]
return (
    <div className={styles.cont}>
        <h1><span>Н</span>овости</h1>
        <News newsList={newsList} styles={styles}/>
    </div>
)
}
export default NewsPage