import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsData: [],
};

const sendRequestEveryBookSlice = createSlice({
  name: "sendRequestEveryBookSlice",
  initialState,
  reducers: {
    changeCommentsData: (state, action) => {
      state.commentsData = action.payload;
    },
  },
});

export const { changeCommentsData } = sendRequestEveryBookSlice.actions;
export default sendRequestEveryBookSlice.reducer;
