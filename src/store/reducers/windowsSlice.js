import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  difficultPassword: {
    width: 70,
    color: "red",
  },
  difficultPassword_text: "Слабый пароль",
  dataUsers: [],
  preloader: false,
};

///////////////////////////////////////////////////////
export const toTakeDataUsers = createAsyncThunk(
  "toTakeDataUsers",
  async (dataUsers, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://648719b3beba6297278fed86.mockapi.io/aizh"
      );
      dispatch(toTakeDataUsersRd(data));
    } catch {
      console.log("error toTakeDataUsers");
    }
  }
);
///////////////////////////////////////////////////////

export const repeatSendRequestMessageEmail = createAsyncThunk(
  "repeatSendRequestMessageEmail",
  async (email, { dispatch }) => {
    try {
      const { data } = await axios({
        method:
          "https://kitepkana1.pythonanywhere.com/auth/users/resend_activation/",
        data: {
          email: email,
        },
      });

      // dispatch(toTakeDataUsersRd(data));
    } catch {
      console.log("error repeatSendRequestMessageEmail");
    }
  }
);
export const sendRequestOnToTakeTokens = createAsyncThunk(
  "sendRequestOnToTakeTokens",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "https://kitepkana1.pythonanywhere.com/auth/jwt/create",
        data: {
          email: localStorage.getItem("temporaryEmail"),
          password: localStorage.getItem("temporaryPassword"),
        },
      });
      // console.log(data, "sendRequestOnToTakeTokens");
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
    } catch (error) {
      console.log(error, "error sendRequestOnToTakeTokens");
    }
  }
);

export const patchRequestToDataUsers = createAsyncThunk(
  "patchRequestToDataUsers",
  async(changedDataUser, {dispatch}) => {
    dispatch(changePreloader(true));
    try {
      const resp = await axios({
        method: "PATCH",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        data: {
          username: changedDataUser.name,
          email: changedDataUser.email,
          password: changedDataUser.password,
          language: changedDataUser.language
        }
      })
      console.log(resp);
      dispatch(changePreloader(false));
      return resp.status
    } catch (error) {
      dispatch(changePreloader(false));
      console.log(error);
    }
  }
)

const windowsSlice = createSlice({
  name: "windowsSlice",
  initialState,
  reducers: {
    changeDifficultPassword: (state, action) => {
      state.difficultPassword.width = action.payload.width;
      state.difficultPassword.color = action.payload.color;
    },
    changeDifficultPassword_text: (state, action) => {
      state.difficultPassword_text = action.payload;
    },
    toTakeDataUsersRd: (state, action) => {
      state.dataUsers = action.payload;
    },
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
  },
});

export const {
  changeDifficultPassword,
  changeDifficultPassword_text,
  toTakeDataUsersRd,
  changePreloader,
} = windowsSlice.actions;
export default windowsSlice.reducer;
