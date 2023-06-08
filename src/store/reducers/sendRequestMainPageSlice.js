import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  dataNoveltyWork: [],
  recommedationBookInfo: [],
  dataBestWork: [],
  kyrgyzWriters: [],
  coordinatesSlider: [],
  preloader: true,
};

export const requestNovetlyWorks = createAsyncThunk(
  "requestNovetlyWorks",
  async (dataNoveltyWork, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal"
      );
      dispatch(changeDateNoveltyWork(data));
      dispatch(changePreloader(false));
    } catch {
      console.log("error requestNovetlyWorks");
    }
  }
);

export const requestRecomBook = createAsyncThunk(
  "requestRecomBook",
  async (recommedationBookInfo, { dispatch }) => {
    try {
      const { data } = await axios.get("");
      dispatch(changeRecommedationBookInfo(data));
    } catch {
      console.log("error requestRecomBook");
    }
  }
);

export const requestKyrgyzWriters = createAsyncThunk(
  "requestKyrgyzWriters",
  async (kyrgyzWriters, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://6474802d7de100807b1b126a.mockapi.io/manasApi/manas"
      );
      dispatch(changeDatekyrgyzWriters(data));
    } catch {
      console.log("error requestKyrgyzWriters");
    }
  }
);

export const requestBestWorks = createAsyncThunk(
  "requestBestWorks",
  async (dataBestWork, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal"
      );
      dispatch(changeDateBestWork(data));
      // console.log(data);
    } catch {
      console.log("error requestBestWorks");
    }
  }
);

const sendRequestMainPageSlice = createSlice({
  name: "sendRequestMainPageSlice",
  initialState,
  reducers: {
    changeDateNoveltyWork: (state, action) => {
      state.dataNoveltyWork = action.payload;
    },
    changeRecommedationBookInfo: (state, action) => {
      state.recommedationBookInfo = action.payload;
    },
    changeDatekyrgyzWriters: (state, action) => {
      state.kyrgyzWriters = action.payload;
    },
    changeDateBestWork: (state, action) => {
      state.dataBestWork = action.payload;
    },
    addCoordinatesSlider: (state, action) => {
      state.coordinatesSlider.push(action.payload);
    },
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
  },
});
export const {
  changeDateNoveltyWork,
  changeRecommedationBookInfo,
  changeDatekyrgyzWriters,
  changeDateBestWork,
  addCoordinatesSlider,
  changePreloader,
} = sendRequestMainPageSlice.actions;
export default sendRequestMainPageSlice.reducer;
