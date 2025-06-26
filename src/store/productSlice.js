// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/hooks/axiosClient"; // axios مفترض عليه baseURL

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (filters = {}, thunkAPI) => {
    const { page = 1, per_page = 12, ...restFilters } = filters;
    const cleanFilters = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(restFilters).filter(([_, v]) => v !== null && v !== "")
    );

    try {
      const res = await axios.get("/products-web", {
        params: { ...cleanFilters, page, per_page },
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || {});
    }
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
        state.meta = {
          currentPage: action.payload.current_page,
          totalPages: action.payload.last_page,
          total: action.payload.total,
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "فشل تحميل المنتجات";
      });
  },
});


export default productSlice.reducer;
