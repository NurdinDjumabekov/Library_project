import React, { useEffect, useState } from "react";
import styles from "./InputSearch.module.css";
import { useDispatch } from "react-redux";
import {
  changeSearch,
  requestAllData,
} from "../../../store/reducers/sendRequestLibraryPageSlice";

const InputSearch = ({ setStateInput }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (search === "") {
      setStateInput(false);
    } else {
      setStateInput(true);
    }
  }, [search]);
  const searchBook = (e) => {
    e.preventDefault();
    dispatch(changeSearch(search));
    setStateInput(true);
  };
  return (
    <div className={styles.parentBlock_search}>
      <form action="" onSubmit={(e) => searchBook(e)}>
        <input
          placeholder="Книга, жанры, автор"
          onChange={(e) => setSearch(e.target.value)}
          className={styles.inputSearch}
        />
        <button type="submit">Поиск</button>
      </form>
    </div>
  );
};

export default InputSearch;
