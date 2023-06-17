import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from '../../store/reducers/readerStateSlice';


const ReadBook = ({itemsPerPage, data, styles, nextLabel, previousLabel, pageRangeDisplayed, marginPagesDisplayed, needScroll}) => {

  const dispatch = useDispatch()
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    dispatch(changeText(currentItems))
  }, [currentItems])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
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
      />
  );
}

export default ReadBook