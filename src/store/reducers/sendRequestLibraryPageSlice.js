// ///////////////////////
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   // dataBestWork: [],
//   // dataNoveltyWork: [],
//   // kyrgyzWriters: [],
// };

// export const requestBestWorks = createAsyncThunk(
//   "requestBestWorks",
//   async (dataBestWork, { dispatch }) => {
//     try {
//       const { data } = await axios.get(
//         "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal"
//       );
//       dispatch(changeDateBestWork(data));
//       // console.log(data);
//     } catch {
//       console.log("error requestBestWorks");
//     }
//   }
// );

// export const requestNovetlyWorks = createAsyncThunk(
//   "requestNovetlyWorks",
//   async (dataNoveltyWork, { dispatch }) => {
//     try {
//       const { data } = await axios.get(
//         "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal"
//       );
//       dispatch(changeDateNoveltyWork(data));
//     } catch {
//       console.log("error requestNovetlyWorks");
//     }
//   }
// );

// export const requestKyrgyzWriters = createAsyncThunk(
//   "requestKyrgyzWriters",
//   async (kyrgyzWriters, { dispatch }) => {
//     try {
//       const { data } = await axios.get(
//         "https://6474802d7de100807b1b126a.mockapi.io/manasApi/manas"
//       );
//       dispatch(changeDatekyrgyzWriters(data));
//     } catch {
//       console.log("error requestKyrgyzWriters");
//     }
//   }
// );

// const sendRequestLibraryPageSlice = createSlice({
//   name: "sendRequestLibraryPageSlice",
//   initialState,
//   reducers: {
//     changeDateBestWork: (state, action) => {
//       state.dataBestWork = action.payload;
//     },
//     changeDateNoveltyWork: (state, action) => {
//       state.dataNoveltyWork = action.payload;
//     },
//     changeDatekyrgyzWriters: (state, action) => {
//       state.kyrgyzWriters = action.payload;
//     },
//   },
// });

// export const {
//   changeDateBestWork,
//   changeDateNoveltyWork,
//   changeDatekyrgyzWriters,
// } = sendRequestLibraryPageSlice.actions;
// export default sendRequestLibraryPageSlice.reducer;
