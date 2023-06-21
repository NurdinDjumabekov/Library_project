import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allData: [],
  allsortBtn: [],
  preloader: true,
  search: "",
  sortBtn: "",
  filteredBtn: "",
};
export const requestSortBtn = createAsyncThunk(
  "requestSortBtn",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://kitepkana1.pythonanywhere.com/genres/",
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });
      dispatch(toTakeAllsortBtn(data));
    } catch (e) {
      console.log(e.error);
    }
  }
);

export const requestAllData = createAsyncThunk(
  "requestBestWorks",
  async (allData, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://kitepkana1.pythonanywhere.com/books/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });
      dispatch(toTakeAllData(data));
      // console.log(allData);
      console.log(data, "ALLDATA");
      dispatch(changePreloader(false));
    } catch {
      console.log("error requestBestWorks");
    }
  }
);

const sendRequestLibraryPageSlice = createSlice({
  name: "sendRequestLibraryPageSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
    toTakeAllData: (state, action) => {
      state.allData = action.payload;
    },
    toTakeAllsortBtn: (state, action) => {
      state.allsortBtn = action.payload;
      console.log(state.allsortBtn);
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
      // console.log(state.search);
    },
    changeSortBtn: (state, action) => {
      state.sortBtn = action.payload;
      // console.log(state.sortBtn);
    },
    changeFilteredBtn: (state, action) => {
      state.filteredBtn = action.payload;
      // console.log(state.filteredBtn);
    },
  },
});

export const {
  changePreloader,
  changeFilteredBtn,
  toTakeAllData,
  toTakeAllsortBtn,
  changeSortBtn,
  changeSearch,
} = sendRequestLibraryPageSlice.actions;
export default sendRequestLibraryPageSlice.reducer;
