import { FETCH_AUTH } from "./auth.types";

const auth = {};

export const authReducer = (state = auth, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return action.payload;
    default:
      return state;
  }
};
