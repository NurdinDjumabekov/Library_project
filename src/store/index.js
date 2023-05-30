import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sendRequestSlice from "./reducers/sendRequestSlice";
import windowsSlice from "./reducers/windowsSlice";
import adminStateSlice from "./reducers/adminStateSlice";
import usersStateSlice from "./reducers/usersStateSlice";
const reducer = combineReducers({
  sendRequestSlice,
  windowsSlice,
  adminStateSlice,
  usersStateSlice,
});
export const store = configureStore({
  reducer,
});
