import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductDataService from "../services/ProductService";

const initialState = [];

export const createProduct = createAsyncThunk(
  "products/create",
  async ({ title, description ,price}) => {
    const res = await ProductDataService.create({ price, title, description });
    return res.data;
  }
);

export const retrieveProducts = createAsyncThunk(
  "products",
  async () => {
    const res = await ProductDataService.getAll();
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/:id",
  async ({ id, data }) => {
    const res = await ProductDataService.update(id, data);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async ({ id }) => {
    await ProductDataService.remove(id);
    return { id };
  }
);

export const deleteAllProducts = createAsyncThunk(
  "products/deleteAll",
  async () => {
    const res = await ProductDataService.removeAll();
    return res.data;
  }
);

export const findProductsByTitle = createAsyncThunk(
  "products/findByTitle",
  async ({ title }) => {
    const res = await ProductDataService.findByTitle(title);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [createProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveProducts.fulfilled]: (state, action) => {
      return [...action.payload];
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
    [deleteAllProducts.fulfilled]: (state, action) => {
      return [];
    },
    [findProductsByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = productSlice;
export default reducer;