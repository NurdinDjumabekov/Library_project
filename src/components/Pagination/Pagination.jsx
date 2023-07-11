import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import usePagination from '@mui/material/usePagination';
import { changeReaderCurrentPage, sendRequestGetBookLastPage, sendRequestGetBookText } from '../../store/reducers/sendRequestEveryBookSlice';



const ReadBook = ({styles, nextLabel, previousLabel, pageRangeDisplayed, marginPagesDisplayed, needScroll, pageCount, id}) => {
  const {readerCurrentPage} = useSelector(
    (state) => state.sendRequestEveryBookSlice
  )
  const dispatch = useDispatch()
  const [itemOffset, setItemOffset] = useState(Number(readerCurrentPage));

  useEffect(() => {
    dispatch(sendRequestGetBookLastPage(id))
  }, [])

  useEffect(() => {
    if(itemOffset !== 0 && itemOffset != Number(readerCurrentPage)) {
      dispatch(changeReaderCurrentPage(itemOffset))
      dispatch(sendRequestGetBookText({id: id, page: itemOffset}))
      console.log(itemOffset);
    }
  }, [itemOffset])

  useEffect(() => {
    console.log(itemOffset);
  }, [itemOffset])

  const handlePageClick = (event) => {
    const newOffset = (event.selected)
    setItemOffset(newOffset+1);
    if(needScroll) {
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      })
    }
  };

  return ( 
      <ReactPaginate
        breakLabel="..."
        nextLabel={nextLabel}
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        pageCount={pageCount}
        previousLabel={previousLabel}
        renderOnZeroPageCount={null}
        containerClassName={styles.paginationContainer}
        pageLinkClassName={styles.paginationNum}
        previousLinkClassName={styles.paginationPrev}
        nextLinkClassName={styles.paginationNext}
        activeLinkClassName={styles.paginationActiveNum}
        breakLinkClassName={styles.paginationBreak}
        // initialPage={Number(readerCurrentPage)-1}
        forcePage={Number(readerCurrentPage)-1}
      />
  );
}

export default ReadBook