// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/hooks/axiosClient"; // axios مفترض عليه baseURL

export const fetchCategories = createAsyncThunk("categories/fetch", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/category-web");
 
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || {});
  }
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [], // ✅ لازم تبقى موجودة
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "فشل تحميل الاقسام";
      });
  },
});


export default categoriesSlice.reducer;
