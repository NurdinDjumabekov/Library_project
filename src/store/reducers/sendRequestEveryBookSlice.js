import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsData: [],
};
export const sendFavotiteBookUsers = createAsyncThunk(
  "sendFavotiteBookUsers",
  async (info, { dispatch }) => {
    // console.log(info);
    if (info.choice === "DELETE") {
      try {
        await axios({
          method: "DELETE",
          url: `https://kitepkana1.pythonanywhere.com/favorite/${info.id}/`,
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
      // console.log("delete");
    } else if (info.choice === "POST") {
      try {
        await axios({
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
      // console.log("post");
    }
  }
);

export const sendRequestComments = createAsyncThunk(
  "sendRequestComments",
  async (info, { dispatch }) => {
    try {
      const data = await axios({
        method: "GET",
        url: `https://kitepkana1.pythonanywhere.com/favorite/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });
    } catch (error) {
      console.log(error, "error sendRequestComments");
    }
  }
);
const sendRequestEveryBookSlice = createSlice({
  name: "sendRequestEveryBookSlice",
  initialState,
  reducers: {
    toTakeCommets: (state, action) => {
      state.commentsData = action.payload;
    },
  },
});

export const { toTakeCommets } = sendRequestEveryBookSlice.actions;
export default sendRequestEveryBookSlice.reducer;
