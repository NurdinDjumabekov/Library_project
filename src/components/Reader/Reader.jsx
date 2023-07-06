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
  const [fontFamaly, setFontFamaly] = useState("")
  const [lineHeight, setLineHeight] = useState(48)
  const [text, setText] = useState('')
  const [optionsOpened, setOptionsOpened] = useState(false)
  useEffect(() => {
    if(localStorage.getItem("fontFamaly") !== null) {
      setFontFamaly(localStorage.getItem("fontFamaly"))
    } else {
      setFontFamaly("Roboto")
      localStorage.setItem("fontFamaly", "Roboto")
    }

    if(localStorage.getItem("lineHeight") !== null) {
      setLineHeight(localStorage.getItem("lineHeight"))
    } else {
      setLineHeight(48)
      localStorage.setItem("lineHeight", 48)
    }
  }, [])
  useEffect(() => {
    dispatch(sendRequestGetBookText({id: id, page: readerCurrentPage}))
    console.log(readerCurrentPage);
  }, [ readerCurrentPage ])

  

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
            <select name="font" id="selectFont" value={fontFamaly} style={{fontFamaly: fontFamaly}} onChange={(e) => {
              setFontFamaly(e.target.value)
              localStorage.setItem("fontFamaly", e.target.value)
            }}>
              <option value="monospace" style={{fontFamily: "monospace"}}>Monospace</option>
              <option value="Roboto" style={{fontFamily: "Roboto"}}>Roboto</option>
              <option value="cursive" style={{fontFamily: "cursive"}}>Cursive</option>
              <option value="serif" style={{fontFamily: "serif"}}>Serif</option>
            </select>
            <span>Межстрочный отступ</span>
            <input type="range" min={40} max={90} value={lineHeight} onChange={(e) => {
              setLineHeight(e.target.value)
              localStorage.setItem("lineHeight", e.target.value)
            }}/>
            <button onClick={() => {
              setFontFamaly("Roboto")
              setLineHeight(48)
              localStorage.setItem("lineHeight", 48)
              localStorage.setItem("fontFamaly", "Roboto")
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