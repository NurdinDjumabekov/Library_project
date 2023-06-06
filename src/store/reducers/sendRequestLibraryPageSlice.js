import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stateForFiltered: "",
  allData: [],
  sortBtn: "",
};

export const requestAllData = createAsyncThunk(
  "requestBestWorks",
  async (allData, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal"
      );
      dispatch(toTakeAllData(data));
      // console.log(data);
    } catch {
      console.log("error requestBestWorks");
    }
  }
);

const sendRequestLibraryPageSlice = createSlice({
  name: "sendRequestLibraryPageSlice",
  initialState,
  reducers: {
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

export const { changeStateForFiltered, toTakeAllData, changeSortBtn } =
  sendRequestLibraryPageSlice.actions;
export default sendRequestLibraryPageSlice.reducer;
