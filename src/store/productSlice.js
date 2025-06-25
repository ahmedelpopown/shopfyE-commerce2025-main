// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/hooks/axiosClient"; // axios مفترض عليه baseURL

export const fetchProducts = createAsyncThunk("products/fetch", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/products-web");
 
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || {});
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [], // ✅ لازم تبقى موجودة
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
        console.log("✅ Payload:", action.payload);
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "فشل تحميل المنتجات";
      });
  },
});


export default productSlice.reducer;
