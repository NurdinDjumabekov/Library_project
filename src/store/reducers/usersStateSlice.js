import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favoriteBooks: "Избранное",
  dataFavotitesBook: [],
};

export const sendRequestFavotitesData = createAsyncThunk(
  "sendRequestFavotitesData",
  async (dataFavotitesBook, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal"
      );
      dispatch(toTakeDataFavotitesBook(data));
    } catch {
      console.log("error sendRequestFavotitesData");
    }
  }
);

const usersStateSlice = createSlice({
  name: "usersStateSlice",
  initialState,
  reducers: {
    changeFavoriteBooks: (state, action) => {
      state.favoriteBooks = action.payload;
    },
    toTakeDataFavotitesBook: (state, action) => {
      state.dataFavotitesBook = action.payload;
    },
  },
});

export const { changeFavoriteBooks, toTakeDataFavotitesBook } =
  usersStateSlice.actions;
export default usersStateSlice.reducer;
