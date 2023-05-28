import axios from "axios";
import { FETCH_AUTH } from "./auth.types.js";

export const getAuth = (params) => {
  return async (dispatch) => {
    try {
      console.log("params", params);
      //only for check should update with real API
      const response = {
        status: 200,
        token: "ffd67Test1234567!@#$%",
      };

      if (params !== undefined) {
        return response;
      }
      if (response.status === 200) {
        // const response = await axios.post(
        //   "https://dummyjson.com/auth/login",params
        // );
        await dispatch({
          type: FETCH_AUTH,
          payload: response,
        });
      }
    } catch (e) {
      console.log("External catch got: " + e);
    }
  };
};
