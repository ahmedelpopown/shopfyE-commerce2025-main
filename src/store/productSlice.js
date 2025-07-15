/* eslint-disable no-unused-vars */
// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import axiosClient from "@/hooks/axiosClient";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (filters = {}, thunkAPI) => {
    const { page = 1, per_page = 12, ...restFilters } = filters;
    const cleanFilters = Object.fromEntries(
      Object.entries(restFilters).filter(([_, v]) => v !== null && v !== "")
    );

    try {
      const res = await axiosClient.get("/products-web", {
        params: { ...cleanFilters, page, per_page },
      });

      return {
        data: res.data.data.data,
        meta: {
          currentPage: res.data.data.current_page,
          totalPages: res.data.data.last_page,
          totalItems: res.data.data.total,
        },
      };
    } catch (err) {
  console.error("Error fetching products:", err.response?.data || err.message);
  return thunkAPI.rejectWithValue(err.response?.data || {});
}
    // catch (err) {
    //   return thunkAPI.rejectWithValue(err.response?.data || {});
    // }
  }
);


const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    meta: {}, // ← meta بتاع الـ pagination
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data; // ← المنتجات
    state.meta = action.payload.meta;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "فشل تحميل المنتجات";
      });
  },
});

export default productSlice.reducer;
