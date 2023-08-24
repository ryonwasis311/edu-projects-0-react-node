import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./components/slices/auth";
import messageReducer from "./components/slices/message";
import productReducer from './components/slices/products';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  products: productReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});