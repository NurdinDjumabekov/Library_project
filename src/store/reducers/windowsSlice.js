import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    changeTextLogin: (state, action) => {
      state.textLogin = action.payload;
    },
  },
});

export const { changeTextLogin } = windowsSlice.actions;
export default windowsSlice.reducer;
