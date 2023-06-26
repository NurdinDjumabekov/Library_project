import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  choiceUserBook: "favorite",
  dataFavotitesBook: [],
  preloader: true,
  checkedUser: false,
  dataEveryUser: [],
  readingNowBookUser: [],
};

export const sendRequestAllDataUser = createAsyncThunk(
  "sendRequestAllDataUser",
  async (state, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://kitepkana1.pythonanywhere.com/${state}/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });
      dispatch(toTakeDataFavotitesBook(data));
      // console.log(data, "rtyg");
      dispatch(changePreloader(false));
      // console.log(state);
    } catch (error) {
      console.log(error, "error sendRequestAllDataUser");
      dispatch(toTakeDataFavotitesBook([]));
      dispatch(changePreloader(false));
    }
  }
);
export const sendRequestDataEveryUser = createAsyncThunk(
  "sendRequestDataEveryUser",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://kitepkana1.pythonanywhere.com/auth/profile/",
        headers: {
          Authorization: `JWT ${info}`,
        },
      });
      localStorage.setItem("dataUser", JSON.stringify(data));
      dispatch(toTakeDataEveryUser(data));
    } catch (error) {
      console.log(error, "error sendRequestDataEveryUser");
      // localStorage.removeItem("access");
      // localStorage.removeItem("refresh");
      // localStorage.removeItem("dataUser");
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
export const toTakeReadingNowBooks = createAsyncThunk(
  "toTakeReadingNowBooks",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://kitepkana1.pythonanywhere.com/finish_bookmark/",
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });
      dispatch(changeReadingNowBookUser(data));
    } catch (error) {
      console.log(error, "error toTakeReadingNowBooks");
    }
  }
);
export const sendRequestdeleteBooks = createAsyncThunk(
  "sendRequestdeleteBooks",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `https://kitepkana1.pythonanywhere.com/favorite/${id}/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });
    } catch (error) {
      console.log(error, "error sendRequestdeleteBooks");
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
    changeChoiceUserBook: (state, action) => {
      state.choiceUserBook = action.payload;
    },
    toTakeDataFavotitesBook: (state, action) => {
      state.dataFavotitesBook = action.payload;
    },
    changeCheckedUser: (state, action) => {
      state.checkedUser = action.payload;
    },
    toTakeDataEveryUser: (state, action) => {
      state.dataEveryUser = action.payload;
    },
    changeReadingNowBookUser: (state, action) => {
      state.readingNowBookUser = action.payload;
    },
    deleteBooksFavorites: (state, action) => {
      return {
        ...state,
        dataFavotitesBook: state.dataFavotitesBook.filter(
          (item) => item.id !== action.payload
        ),
      };
    },
  },
});

export const {
  changeChoiceUserBook,
  toTakeDataFavotitesBook,
  changePreloader,
  changeCheckedUser,
  toTakeDataEveryUser,
  changeReadingNowBookUser,
  deleteBooksFavorites,
} = usersStateSlice.actions;
export default usersStateSlice.reducer;
