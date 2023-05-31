import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainIconState: false,
};
const windowsSlice = createSlice({
  name: "windowsSlice",
  initialState,
  reducers: {
    changeMainIconState: (state, action) => {
      state.mainIconState = action.payload;
    },
  },
});

export const { changeMainIconState } = windowsSlice.actions;
export default windowsSlice.reducer;
