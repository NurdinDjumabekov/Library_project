import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { changeReaderCurrentPage } from "../../store/reducers/sendRequestEveryBookSlice";

const ReadBook = ({
  styles,
  nextLabel,
  previousLabel,
  pageRangeDisplayed,
  marginPagesDisplayed,
  needScroll,
  pageCount,
}) => {
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(changeReaderCurrentPage(itemOffset + 1));
  }, [itemOffset]);

  useEffect(() => {
    console.log(itemOffset + 1);
  }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = event.selected;
    setItemOffset(newOffset);
    if (needScroll) {
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
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
};

export default ReadBook;
