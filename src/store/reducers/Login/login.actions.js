import axios from "axios";
import { FETCH_USER, GET_NEWPASSWORD } from "./login.types.js";

export const getUser = (params) => {
  return async (dispatch) => {
    try {
      const res = {
        status: 200,
        token: "ffd67Test1234567!@#$%",
      };

      if (params.token.length) {
        return res;
      }

      // const res = await axios.post(
      //   "https://dummyjson.com/auth/login", params
      // );

      // if (res.status === 200) {
      //   await dispatch({
      //     type: FETCH_USER,
      //     payload: res,
      //   });
      // }
    } catch (e) {
      console.log("External catch got: " + e);
    }
  };
};

export const getNewPassword = (params) => {
  return async (dispatch) => {
    try {
      const res = {
        status: 200,
      };

      if (params.number) {
        return res;
      }

      // const res = await axios.post(
      //   "https://dummyjson.com/auth/newPassword", params
      // );

      // if (res.status === 200) {
      //   await dispatch({
      //     type: GET_NEWPASSWORD,
      //     payload: res,
      //   });
      // }
    } catch (e) {
      console.log("External catch got: " + e);
    }
  };
};
