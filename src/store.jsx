import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./components/slices/auth"
import messageReducer from "./components/slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});