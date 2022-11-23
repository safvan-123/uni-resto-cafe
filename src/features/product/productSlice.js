import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  products: [],
};

export const getAllProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get(
    "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
  );
  return response.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
