import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficultPassword: {
    width: 70,
    color: "red",
  },
};
const windowsSlice = createSlice({
  name: "windowsSlice",
  initialState,
  reducers: {
    changeDifficultPassword: (state, action) => {
      state.difficultPassword.width = action.payload.width;
      state.difficultPassword.color = action.payload.color;
      // console.log(state.difficultPassword);
    },
  },
});

export const { changeDifficultPassword } = windowsSlice.actions;
export default windowsSlice.reducer;
