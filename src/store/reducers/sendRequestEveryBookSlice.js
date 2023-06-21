import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsData: [],
  // favotiteBookUsers
};
export const sendFavotiteBookUsers = createAsyncThunk(
  "sendFavotiteBookUsers",
  async (info, { dispatch }) => {
    console.log(info);
    if (info.btn) {
      try {
        axios({
          method: "DELETE",
          url: `https://kitepkana1.pythonanywhere.com/favorite/${info.id}/`,
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        axios({
          method: "POST",
          url: "https://kitepkana1.pythonanywhere.com/favorite/",
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
          data: {
            book: info.id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
);
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
