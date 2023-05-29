import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  recommedationBookInfo: [],
};

export const requestRecomBook = createAsyncThunk(
  "requestRecomBook",
  async (recommedationBookInfo, { dispatch }) => {
    try {
      const { data } = await axios.get("");
      dispatch(changeRecommedationBookInfo(data));
    } catch {
      console.log("error requestRecomBook");
    }
  }
);

const sendRequestMainPageSlice = createSlice({
  name: "sendRequestMainPageSlice",
  initialState,
  reducers: {
    changeRecommedationBookInfo: (state, action) => {
      state.recommedationBookInfo = action.payload;
    },
  },
});
export const { changeRecommedationBookInfo } = sendRequestMainPageSlice.actions;
export default sendRequestMainPageSlice.reducer;
