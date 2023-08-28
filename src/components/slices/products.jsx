import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ProductDataService from  "../services/ProductService";

const initialState = [];
export const createProduct = createAsyncThunk(
  "products/create",
  async ({ title, description ,price}) => {
    const res = await ProductDataService.createProduct({ price, title, description });
    return res.data;
  }
);
export const updateProduct = createAsyncThunk(
  "products/update/:id",
  async ({ id, data }) => {
    const res = await ProductDataService.updateProduct(id, data);
    return res.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async ({ id }) => {
    console.log(id);
    await ProductDataService.deleteProduct(id);
    return { id };
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [createProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updateProduct.fulfilled]: (state, action) => {
      const index = state.findIndex(products => products.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteProduct.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

const { reducer } = productSlice;

export default reducer;