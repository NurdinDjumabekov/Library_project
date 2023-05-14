import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: "проект начался",
};
const sendRequestSlice = createSlice({
  name: "sendRequestSlice",
  initialState,
  reducers: {
    changeStart: (state, action) => {
      state.start = action.payload;
    },
  },
});

export const { changeStart } = sendRequestSlice.actions;
export default sendRequestSlice.reducer;
