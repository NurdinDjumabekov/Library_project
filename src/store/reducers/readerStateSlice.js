import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentShow: ""
}

const readerStateSlice = createSlice({
    name: "readerStateSlice",
    initialState,
    reducers: {
        changeText: (state, action) => {
            state.currentShow = action.payload
        }
    }
})

export const { changeText } = readerStateSlice.actions;
export default readerStateSlice.reducer