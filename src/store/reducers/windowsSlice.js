import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficultPassword: {
    width: 70,
    color: "red",
  },
  difficultPassword_text: "Слабый пароль",
};
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
  },
});

export const { changeDifficultPassword, changeDifficultPassword_text } =
  windowsSlice.actions;
export default windowsSlice.reducer;
