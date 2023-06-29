import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsData: [],
  infoEveryWriters: {},
  preloader: true,
  ifSendRequestError: true,
  readerCurrentPage: 1,
};
export const sendFavotiteBookUsers = createAsyncThunk(
  "sendFavotiteBookUsers",
  async (info, { dispatch }) => {
    // console.log(info);
    if (info.choice === "DELETE") {
      try {
        await axios({
          method: "DELETE",
          url: `https://kitepkana1.pythonanywhere.com/favorite/${info.id}/`,
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
      // console.log("delete");
    } else if (info.choice === "POST") {
      try {
        await axios({
          method: "POST",
          url: "https://kitepkana1.pythonanywhere.com/favorite/",
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
          data: {
            book: info.id,
          },
        });
      } catch (error) {
        console.log(error);
      }
      // console.log("post");
    }
  }
);

// export const sendRequestComments = createAsyncThunk(
//   "sendRequestComments",
//   async (info, { dispatch }) => {
//     try {
//       const data = await axios({
//         method: "GET",
//         url: `https://kitepkana1.pythonanywhere.com/favorite/`,
//         headers: {
//           Authorization: `JWT ${localStorage.getItem("access")}`,
//         },
//       });
//     } catch (error) {
//       console.log(error, "error sendRequestComments");
//     }
//   }
// );

export const sendRequestAddCommetns = createAsyncThunk(
  "sendRequestAddCommetns",
  async (info, { dispatch }) => {
    try {
      await axios({
        method: "POST",
        url: "https://kitepkana1.pythonanywhere.com/reviews/",
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
        data: {
          book: info.id,
          text: info.input,
          star: info.star,
        },
      });
      // console.log(info);
    } catch (error) {
      console.log(error, "error sendRequestAddCommetns");
    }
  }
);

export const sendRequestDetailedWriters = createAsyncThunk(
  "sendRequestDetailedWriters",
  async (id, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://kitepkana1.pythonanywhere.com/authors/${id}/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });
      dispatch(toTakeEveryWriters(data));
      dispatch(changePreloader(false));
      dispatch(changeSendRequestError(true));

      // console.log(data);
    } catch (error) {
      if (error.message.includes("Request failed with status code 401")) {
        dispatch(changeSendRequestError(false));
      }
      console.log(error, "error sendRequestDetailedWriters");
      dispatch(changePreloader(false));
    }
  }
);
const sendRequestEveryBookSlice = createSlice({
  name: "sendRequestEveryBookSlice",
  initialState,
  reducers: {
    toTakeCommets: (state, action) => {
      state.commentsData = action.payload;
    },
    toTakeEveryWriters: (state, action) => {
      state.infoEveryWriters = action.payload;
    },
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
    changeSendRequestError: (state, action) => {
      state.ifSendRequestError = action.payload;
    },
    changeReaderCurrentPage: (state, action) => {
      state.readerCurrentPage = action.payload;
    },
  },
});

export const {
  toTakeCommets,
  toTakeEveryWriters,
  changePreloader,
  changeSendRequestError,
  changeReaderCurrentPage,
} = sendRequestEveryBookSlice.actions;
export default sendRequestEveryBookSlice.reducer;
