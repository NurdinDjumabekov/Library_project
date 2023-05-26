import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: "это состояние можешь поменять!",
};
const adminStateSlice = createSlice({
  name: "adminStateSlice",
  initialState,
  reducers: {
    changeStart: (state, action) => {
      state.start = action.payload;
    },
  },
});

export const { changeStart } = adminStateSlice.actions;
export default adminStateSlice.reducer;
