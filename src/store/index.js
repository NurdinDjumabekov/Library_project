import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sendRequestSlice from "./reducers/sendRequestSlice";
import { authReducer } from "./reducers/Auth/auth.reducer";
import { loginReducer } from "./reducers/Login/login.reducer";

const reducer = combineReducers({
  sendRequestSlice,
  authReducer,
  loginReducer
});
export const store = configureStore({
  reducer,
   
});
