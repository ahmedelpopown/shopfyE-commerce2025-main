/* eslint-disable no-unused-vars */
// src/store/productDetailsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosClient from "@/hooks/axiosClient";

export const fetchProductById = createAsyncThunk(
  "productDetails/fetchProductById",
  async (id, thunkAPI) => {
    const response = await axiosClient.get(`products-web/${id}`);
    return response.data;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productDetailsSlice.reducer;
