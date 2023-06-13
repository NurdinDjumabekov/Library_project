import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stateForFiltered: "",
  allData: [],
  sortBtn: "",
  preloader: true,
};

export const requestAllData = createAsyncThunk(
  "requestBestWorks",
  async (allData, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://kitepkana1.pythonanywhere.com/books/"
      );
      dispatch(toTakeAllData(data));
      // console.log(data);
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
    changeStateForFiltered: (state, action) => {
      state.stateForFiltered = action.payload;
    },
    toTakeAllData: (state, action) => {
      state.allData = action.payload;
    },
    changeSortBtn: (state, action) => {
      state.sortBtn = action.payload;
    },
  },
});

export const {
  changePreloader,
  changeStateForFiltered,
  toTakeAllData,
  changeSortBtn,
} = sendRequestLibraryPageSlice.actions;
export default sendRequestLibraryPageSlice.reducer;
