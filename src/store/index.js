import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sendRequestLibraryPageSlice from "./reducers/sendRequestLibraryPageSlice";
import windowsSlice from "./reducers/windowsSlice";
import adminStateSlice from "./reducers/adminStateSlice";
import usersStateSlice from "./reducers/usersStateSlice";
const reducer = combineReducers({
  sendRequestLibraryPageSlice,
  windowsSlice,
  adminStateSlice,
  usersStateSlice,
});
export const store = configureStore({
  reducer,
});
