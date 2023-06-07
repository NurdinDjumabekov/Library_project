import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainIconState: false,
  // textsRegistration: {
  //   login: "nur",
  //   password: "",
  //   repeatpassword: "",
  // },
  textLogin: "",
};
const windowsSlice = createSlice({
  name: "windowsSlice",
  initialState,
  reducers: {
    changeMainIconState: (state, action) => {
      state.mainIconState = action.payload;
    },
    changeTextLogin: (state, action) => {
      state.textLogin = action.payload;
    },
  },
});

export const { changeMainIconState, changeTextLogin } = windowsSlice.actions;
export default windowsSlice.reducer;
