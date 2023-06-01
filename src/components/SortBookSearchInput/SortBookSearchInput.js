import React, { useEffect, useState } from "react";
import styles from "./SortBookSearchInput.module.css";

const SortBookSearchInput = ({listOfBook,updateFiteredList}) => {
  const [searchInput,setSearchInput] = useState('');
  const filteredListOfBook = listOfBook.filter(book =>  {return book.name.toLowerCase().includes(searchInput.toLowerCase())});
  useEffect(()=>{
    updateFiteredList(filteredListOfBook)
  },[searchInput])
  return (
    <>
      <input type="text" placeholder="Фильтр по названию" onChange={e => setSearchInput(e.target.value)}/>
    </>
  );
};

export default SortBookSearchInput;
