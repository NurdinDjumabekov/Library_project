import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allData: [],
  allsortBtn: [],
  preloader: true,
  search: "",
  sortBtn: "",
  filteredBtn: "",
  stateBtn: false,
};
export const requestSortBtn = createAsyncThunk(
  "requestSortBtn",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://kitepkana1.pythonanywhere.com/genres/",
      });
      dispatch(toTakeAllsortBtn(data));
      // console.log(data, "requestSortBtn");
    } catch (error) {
      console.log(error, requestSortBtn);
    }
  }
);
const api = "https://kitepkana1.pythonanywhere.com/";
export const requestAllData = createAsyncThunk(
  "requestAllData",
  async (allData, { dispatch }) => {
    setTimeout(() => {
      allData.search = "";
    }, 1000);
    try {
      const { data } = await axios({
        method: "GET",
        url: `${
          allData.stateInput
            ? `${api}search_filter/?q=${allData.search}`
            : `${api}books/`
        }`,
      });
      dispatch(toTakeAllData(data));
      // console.log(allData.search);
      // ("https://kitepkana1.pythonanywhere.com/Чингиз");
      // console.log(allData);
      dispatch(changePreloader(false));
    } catch (error) {
      console.log(error, "error requestAllData");
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
      // console.log(state.allsortBtn);
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
    changeStateBtns: (state, action) => {
      state.stateBtn = action.payload;
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
  changeStateBtns,
} = sendRequestLibraryPageSlice.actions;
export default sendRequestLibraryPageSlice.reducer;
