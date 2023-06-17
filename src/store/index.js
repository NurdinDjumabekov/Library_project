import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sendRequestLibraryPageSlice from "./reducers/sendRequestLibraryPageSlice";
import windowsSlice from "./reducers/windowsSlice";
import adminStateSlice from "./reducers/adminStateSlice";
import usersStateSlice from "./reducers/usersStateSlice";
import sendRequestMainPageSlice from "./reducers/sendRequestMainPageSlice";
import sendRequestEveryBookSlice from "./reducers/sendRequestEveryBookSlice";
const reducer = combineReducers({
  sendRequestLibraryPageSlice,
  windowsSlice,
  adminStateSlice,
  usersStateSlice,
  sendRequestMainPageSlice,
  sendRequestEveryBookSlice,
});
export const store = configureStore({
  reducer,
});
