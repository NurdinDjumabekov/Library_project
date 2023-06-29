import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { async } from "q";

const initialState = {
  difficultPassword: {
    width: 70,
    color: "red",
  },
  difficultPassword_text: "Слабый пароль",
  dataUsers: [],
  preloader: false,
};
export const sendRequestEditUserPhoto = createAsyncThunk(
  "sendRequestEditUserPhoto",
  async (img, { dispatch }) => {
    console.log(img);
    const formData = new FormData();
    formData.append("user_photo", img);
    try {
      await axios({
        method: "PATCH",
        url: "https://kitepkana1.pythonanywhere.com/auth/profile/",
        data: formData,
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });
    } catch (error) {
      console.log(error, "sendRequestEditUserPhoto");
    }
  }
);

///////////////////////////////////////////////////////
export const toTakeDataUsers = createAsyncThunk(
  "toTakeDataUsers",
  async (dataUsers, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://648719b3beba6297278fed86.mockapi.io/aizh"
      );
      dispatch(toTakeDataUsersRd(data));
    } catch {
      console.log("error toTakeDataUsers");
    }
  }
);
///////////////////////////////////////////////////////

export const repeatSendRequestMessageEmail = createAsyncThunk(
  "repeatSendRequestMessageEmail",
  async (email, { dispatch }) => {
    try {
      const { data } = await axios({
        method:
          "https://kitepkana1.pythonanywhere.com/auth/users/resend_activation/",
        data: {
          email: email,
        },
      });

      // dispatch(toTakeDataUsersRd(data));
    } catch {
      console.log("error repeatSendRequestMessageEmail");
    }
  }
);
export const sendRequestOnToTakeTokens = createAsyncThunk(
  "sendRequestOnToTakeTokens",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "https://kitepkana1.pythonanywhere.com/auth/jwt/create",
        data: {
          email: localStorage.getItem("temporaryEmail"),
          password: localStorage.getItem("temporaryPassword"),
        },
      });
      // console.log(data, "sendRequestOnToTakeTokens");
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
    } catch (error) {
      console.log(error, "error sendRequestOnToTakeTokens");
    }
  }
);
export const changeDataUser = createAsyncThunk(
  "changeDataUser",
  async (info, { dispatch }) => {
    try {
      if (info.type === 1) {
        await axios({
          method: "PATCH",
          url: "https://kitepkana1.pythonanywhere.com/auth/profile/",
          data: {
            username: info.change.name,
          },
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
        });
      }
      if (info.type === 3) {
        await axios({
          method: "POST",
          url: "https://kitepkana1.pythonanywhere.com/auth/users/set_email/",
          data: {
            current_password: info.change.password,
            new_email: info.change.email,
          },
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
        });
      }
    } catch (error) {
      console.log(error, "error changeDataUser");
    }
  }
);

const windowsSlice = createSlice({
  name: "windowsSlice",
  initialState,
  reducers: {
    changeDifficultPassword: (state, action) => {
      state.difficultPassword.width = action.payload.width;
      state.difficultPassword.color = action.payload.color;
    },
    changeDifficultPassword_text: (state, action) => {
      state.difficultPassword_text = action.payload;
    },
    toTakeDataUsersRd: (state, action) => {
      state.dataUsers = action.payload;
    },
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
  },
});

export const {
  changeDifficultPassword,
  changeDifficultPassword_text,
  toTakeDataUsersRd,
  changePreloader,
} = windowsSlice.actions;
export default windowsSlice.reducer;
