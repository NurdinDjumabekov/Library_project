import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsData: [],
  readerCurrentShow: ""
};

const sendRequestEveryBookSlice = createSlice({
  name: "sendRequestEveryBookSlice",
  initialState,
  reducers: {
    changeCommentsData: (state, action) => {
      state.commentsData = action.payload;
    },
    changeReaderCurrentShow: (state, action) => {
      state.readerCurrentShow = action.payload
    }
  },
});

export const { changeCommentsData, changeReaderCurrentShow } = sendRequestEveryBookSlice.actions;
export default sendRequestEveryBookSlice.reducer;
