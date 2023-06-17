import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favoriteBooks: "Избранное",
  dataFavotitesBook: [],
  preloader: true,
  dataEveryUser: [],
};

export const sendRequestFavotitesData = createAsyncThunk(
  "sendRequestFavotitesData",
  async (data, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal"
      );
      dispatch(toTakeDataFavotitesBook(data));
      dispatch(changePreloader(false));
    } catch {
      console.log("error sendRequestFavotitesData");
    }
  }
);
export const sendRequestDataEveryUser = createAsyncThunk(
  "sendRequestDataEveryUser",
  async (info, { dispatch }) => {
    try {
      const data = await axios({
        method: "GET",
        url: "https://kitepkana1.pythonanywhere.com/profile/",
        headers: {
          Authorization: `${info}`,
        },
      });
      console.log(info);
      // dispatch(toTakeDataEveryUser(data));
      console.log(data);
    } catch {
      console.log("error sendRequestDataEveryUser");
      // console.log(info);
    }
  }
);

const usersStateSlice = createSlice({
  name: "usersStateSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
    changeFavoriteBooks: (state, action) => {
      state.favoriteBooks = action.payload;
    },
    toTakeDataFavotitesBook: (state, action) => {
      state.dataFavotitesBook = action.payload;
    },
    toTakeDataEveryUser: (state, action) => {
      state.dataEveryUser = action.payload;
    },
  },
});

export const {
  changeFavoriteBooks,
  toTakeDataFavotitesBook,
  changePreloader,
  toTakeDataEveryUser,
} = usersStateSlice.actions;
export default usersStateSlice.reducer;
