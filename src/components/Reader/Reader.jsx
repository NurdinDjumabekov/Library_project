import React, { useState } from 'react'
import styles from "./Reader.module.css";
import ReactPaginate from 'react-paginate';
import Pagination from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';

const Reader = ({data}) => {

  const currentItemsState = useSelector((state) => state.sendRequestEveryBookSlice.readerCurrentShow)


  return (
    <>
    <div className="container">
      <div className={styles.bookText}>
        {currentItemsState}
      </div>
      <Pagination itemsPerPage={10000} data={data} styles={styles} nextLabel={"Вперед"} previousLabel={"Назад"} pageRangeDisplayed={5} marginPagesDisplayed={3} needScroll={true}/>
    </div>
    </>
  );
}

export default Reader