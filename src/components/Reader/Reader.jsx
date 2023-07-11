import React, { useState, useEffect } from 'react'
import styles from "./Reader.module.css";
import ReactPaginate from 'react-paginate';
import Pagination from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { changeReaderCurrentPage, sendRequestGetBookText } from '../../store/reducers/sendRequestEveryBookSlice';
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
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5)
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(3)
  const [nextLabel, setNextLabel] = useState("Вперед")
  const [prevLabel, setPrevLabel] = useState("Назад")
  const [currentOptionMargin, setCurrentOptionMargin] = useState(-422)
  // const [a, setA] = useState(window.screen.width)
  // useEffect(() => {
  //   console.log(window.screen.width);
  // }, [a])
  const checkWindowSize = () => {
    if(window.screen.width > 1100) {
      setPageRangeDisplayed(5)
      setMarginPagesDisplayed(3)
      setNextLabel("Вперед")
      setPrevLabel("Назад")
    } else if(window.screen.width <= 1100 && window.screen.width >= 970) {
      setPageRangeDisplayed(3)
      setMarginPagesDisplayed(3)
      setNextLabel("Вперед")
      setPrevLabel("Назад")
    } else if(window.screen.width < 970 && window.screen.width > 910) {
      setPageRangeDisplayed(3)
      setMarginPagesDisplayed(3)
      setNextLabel("Вперед")
      setPrevLabel("Назад")
      // setMarginPagesDisplayed(1)
    } else if(window.screen.width <= 910 && window.screen.width > 760) {
      setNextLabel(">")
      setPrevLabel("<")
      setMarginPagesDisplayed(3)
      setPageRangeDisplayed(3)
    } else if(window.screen.width <= 760 && window.screen.width > 630) {
      setNextLabel(">")
      setPrevLabel("<")
      setMarginPagesDisplayed(2)
      setPageRangeDisplayed(1)
    } else {
      setMarginPagesDisplayed(1)
      setPageRangeDisplayed(1)
      setNextLabel(">")
      setPrevLabel("<")
    }

    if(window.screen.width <= 480 && window.screen.width > 430) {
      setCurrentOptionMargin(-372)
    } else if(window.screen.width <= 430) {
      setCurrentOptionMargin(-272)
    } else {
      setCurrentOptionMargin(-422)
    }

  }
  window.onresize = () => {
    console.log(window.screen.width);
    console.log(window.screen.height);
    checkWindowSize()
  }
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

    checkWindowSize()

    // if(localStorage.getItem("lastBookPage") !== null) {
    //   dispatch(changeReaderCurrentPage(localStorage.getItem("lastBookPage")))
    // }
  }, [])
  useEffect(() => {
    dispatch(sendRequestGetBookText({id: id, page: readerCurrentPage}))
    localStorage.setItem("lastBook", id)
    localStorage.setItem("lastBookPage", readerCurrentPage)
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
          {bookTextInfo.results.length <= 0 ? "Ошибка при получении текста." : bookTextInfo.results[0].text}
        </div>
        <div className={styles.textOptionsParent} style={{right: optionsOpened ? "0" : currentOptionMargin+"px"}}>
          <div className={styles.settingImg} style={{boxShadow: optionsOpened ? "0 0 50px #7777778a" : "none"}} onClick={() => {
            setOptionsOpened(!optionsOpened)
          }}>
            <img src={settingImg} style={{transform: optionsOpened ? "scale(-1, 1)" : ""}} alt="404" />
          </div>
          <div className={styles.textOptions} style={{boxShadow: optionsOpened ? "0 0 50px #7777778a" : "none"}}>
            <label htmlFor='selectFont'>Настройка шрифта</label>
            <select name="font" id="selectFont" value={fontFamaly} style={{fontFamaly: fontFamaly}} onChange={(e) => {
              setFontFamaly(e.target.value)
              localStorage.setItem("fontFamaly", e.target.value)
            }}>
              <option value="Roboto" style={{fontFamily: "Roboto, sans-serif"}}>Roboto</option>
              <option value="monospace" style={{fontFamily: "monospace, sans-serif"}}>Monospace</option>
              <option value="serif" style={{fontFamily: "serif"}}>Serif</option>
              <option value="'Ysabeau SC'" style={{fontFamily: "'Ysabeau SC', sans-serif"}}>Ysabeau SC</option>
              <option value="'PT Mono'" style={{fontFamily: "'PT Mono', sans-serif"}}>PT Mono</option>
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
            }} >Сбросить настройки</button>
          </div>
        </div>
      </div>
    )}
    
    <div className="container">
      <Pagination 
        styles={styles} 
        nextLabel={nextLabel} 
        previousLabel={prevLabel}
        pageRangeDisplayed={pageRangeDisplayed} 
        marginPagesDisplayed={marginPagesDisplayed} 
        needScroll={true} 
        pageCount={bookTextInfo.count}
      />
    </div>
    </>
  );
}

export default Reader