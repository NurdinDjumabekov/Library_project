import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favoriteBooks: "Избранное",
  dataFavotitesBook: [],
  preloader: true,
  checkedUser: false,
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
      const { data } = await axios({
        method: "GET",
        url: "https://kitepkana1.pythonanywhere.com/profile/",
        headers: {
          Authorization: `JWT ${info}`,
        },
      });
      localStorage.setItem("dataUser", JSON.stringify(data));
      console.log(data);
    } catch {
      console.log("error sendRequestDataEveryUser");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("dataUser");
      dispatch(changeCheckedUser(false));
      // console.log(info);
    }
  }
);
export const updateTokens = createAsyncThunk(
  "updateTokens",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "https://kitepkana1.pythonanywhere.com/auth/jwt/refresh/",
        data: {
          refresh: localStorage.getItem("refresh"),
        },
      });
      // console.log(data.access);
      localStorage.setItem("access", data.access);
    } catch {
      console.log("error updateTokens");
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
    changeCheckedUser: (state, action) => {
      state.checkedUser = action.payload;
    },
  },
});

export const {
  changeFavoriteBooks,
  toTakeDataFavotitesBook,
  changePreloader,
  changeCheckedUser,
} = usersStateSlice.actions;
export default usersStateSlice.reducer;
