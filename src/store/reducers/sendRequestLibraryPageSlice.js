import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allData: [],
  preloader: true,
  search: "",
  sortBtn: "",
  filteredBtn: "",
};

export const requestAllData = createAsyncThunk(
  "requestBestWorks",
  async (allData, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://kitepkana1.pythonanywhere.com/books/"
      );
      dispatch(toTakeAllData(data));
      console.log(allData);
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
  changeSortBtn,
  changeSearch,
} = sendRequestLibraryPageSlice.actions;
export default sendRequestLibraryPageSlice.reducer;
