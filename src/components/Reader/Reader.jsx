import React, { useState, useEffect } from 'react'
import styles from "./Reader.module.css";
import ReactPaginate from 'react-paginate';
import Pagination from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { sendRequestGetBookText } from '../../store/reducers/sendRequestEveryBookSlice';
import settingImg from "../../assests/images/windows/arrow-shape-turn-left-light.svg"

const Reader = ({ id }) => {
  const dispatch = useDispatch()
  const { bookTextInfo, preloader, readerCurrentPage } = useSelector(
    (state) => state.sendRequestEveryBookSlice
  )
  // useEffect(() => {
  //   dispatch(getBookTextInfo(id))
  // }, [ ])
  // dispatch(getBookTextInfo(id, currentReaderPage))
  const [text, setText] = useState('')
  const [fontFamaly, setFontFamaly] = useState("Roboto")
  const [lineHeight, setLineHeight] = useState(48)
  const [optionsOpened, setOptionsOpened] = useState(false)
  useEffect(() => {
    dispatch(sendRequestGetBookText({id: id, page: readerCurrentPage}))
    console.log(readerCurrentPage);
  }, [ readerCurrentPage ])
  useEffect(() => {
    // setText(bookTextInfo.results[0].text)
    // setText(text.replace(/\n/g, ""))
    console.log(text);
  }, [bookTextInfo])
  

  return (
    <>
    {preloader ? (
      <Preloader/>
    ) : 
    (
      <div className={styles.readerParent}>
        <div className={styles.bookText} style={{fontFamily: fontFamaly, lineHeight: lineHeight+"px"}}>
          {bookTextInfo.results[0].text}
        </div>
        <div className={styles.textOptionsParent} style={{right: optionsOpened ? "0" : "-422px"}}>
          <div className={styles.settingImg} style={{boxShadow: optionsOpened ? "0 0 50px #777777" : "none"}} onClick={() => {
            setOptionsOpened(!optionsOpened)
          }}>
            <img src={settingImg} style={{transform: optionsOpened ? "scale(-1, 1)" : ""}} alt="404" />
          </div>
          <div className={styles.textOptions} style={{boxShadow: optionsOpened ? "0 0 50px #777777" : "none"}}>
            <label htmlFor='selectFont'>Настройка шрифта</label>
            <select name="font" id="selectFont" value={fontFamaly} onChange={(e) => {
              setFontFamaly(e.target.value)
            }}>
              <option value="monospace">Monospace</option>
              <option value="Roboto">Roboto</option>
              <option value="Cursive">Cursive</option>
              <option value="serif">Serif</option>
            </select>
            <span>Межстрочный отступ</span>
            <input type="range" min={40} max={90} value={lineHeight} onChange={(e) => {
              setLineHeight(e.target.value)
            }}/>
            <button onClick={() => {
              setFontFamaly("Roboto")
              setLineHeight(48)
            }}>Сбросить настройки</button>
          </div>
        </div>
      </div>
    )}
    <div className="container">
      <Pagination 
        styles={styles} 
        nextLabel={"Вперед"} 
        previousLabel={"Назад"}
        pageRangeDisplayed={5} 
        marginPagesDisplayed={3} 
        needScroll={true} 
        pageCount={bookTextInfo.count}
      />
    </div>
    </>
  );
}

export default Reader