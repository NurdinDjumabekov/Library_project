import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  difficultPassword: {
    width: 70,
    color: "red",
  },
  difficultPassword_text: "Слабый пароль",
  dataUsers: [],
};

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
  },
});

export const {
  changeDifficultPassword,
  changeDifficultPassword_text,
  toTakeDataUsersRd,
} = windowsSlice.actions;
export default windowsSlice.reducer;
