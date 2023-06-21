import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsData: [],
  readerCurrentPage: 1
};

const sendRequestEveryBookSlice = createSlice({
  name: "sendRequestEveryBookSlice",
  initialState,
  reducers: {
    changeCommentsData: (state, action) => {
      state.commentsData = action.payload;
    },
    changeReaderCurrentPage: (state, action) => {
      state.readerCurrentPage = action.payload
    }
  },
});

export const { changeCommentsData, changeReaderCurrentPage } = sendRequestEveryBookSlice.actions;
export default sendRequestEveryBookSlice.reducer;
