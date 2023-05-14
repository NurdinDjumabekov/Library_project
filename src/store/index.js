import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sendRequestSlice from "./reducers/sendRequestSlice";
const reducer = combineReducers({
  sendRequestSlice,
});
export const store = configureStore({
  reducer,
});
