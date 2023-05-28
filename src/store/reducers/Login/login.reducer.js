import { FETCH_USER, GET_NEWPASSWORD } from "./login.types";

const user = {};

export const loginReducer = (state = user, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case GET_NEWPASSWORD:
      return action.payload;
    default:
      return state;
  }
};
