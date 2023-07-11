import React, { useEffect, useState } from "react";
import styles from "./Reader.module.css";
import ReactPaginate from "react-paginate";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { Document, Outline, Page, pdfjs } from "react-pdf";
import axios from "axios";
import pdf from "../../assests/pdf-books/book3.pdf";

const Reader = ({ data }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const currentPageState = useSelector(
    (state) => state.sendRequestEveryBookSlice.readerCurrentPage
  );
  console.log(currentPageState);
  const [pageCount, setPageCount] = useState(1);
  // let [pdf, setPdf] = useState(null)
  // useEffect(() => {
  //   axios.get("https://drive.google.com/file/d/1bLxZ2aV7R2MnGeSYbw4-of63bl8PTw5-/view?usp=sharing").then(data => setPdf(data.data))
  // }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setPageCount(numPages);
  }

  return (
    <div className={styles.readerComponent}>
      {/* <div className={styles.bookText}>
        {currentPageState}
      </div> */}
      <div className={styles.reader}>
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.documentPDF}
        >
          <Page
            pageNumber={currentPageState}
            className={styles.pagePDF}
            renderMode="canvas"
            canvasBackground="transparent"
            renderAnnotationLayer={false}
            width={1200}
            scale={0.815}
          />
        </Document>
      </div>
      <Pagination
        styles={styles}
        nextLabel={"Вперед"}
        previousLabel={"Назад"}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        needScroll={true}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Reader;
