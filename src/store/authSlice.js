import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/hooks/axiosClient";
 
// Register
export const registerUser = createAsyncThunk("auth/registerUser", async (formData, thunkAPI) => {
   try {

    const res = await axios.post("/register", formData);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || {});
  }
});

// Login
export const loginUser = createAsyncThunk("auth/loginUser", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post("/login", credentials);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || {});
  }
});

// Logout (اختياري)
export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, thunkAPI) => {
  try {
    await axios.post("/logout");
    thunkAPI.dispatch(logout());

  } catch (err) {
    console.error("Logout error:", err);
  }
});

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
}; 
  

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
        localStorage.removeItem("persist:root"); // ✅
        
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
  const user = action.payload.user;
  

  // ✅ تحقق من الدور هنا
  if (user.role_id !== 2) {
    state.loading = false;
    state.user = null;
    state.token = null;
    state.error = "غير مصرح لك بالدخول";
    return;
  }
  
  // ✅ لو الدور صح، كمل تخزين البيانات
  state.loading = false;
  state.user = user;
  state.token = action.payload.token;
})
.addCase(loginUser.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload?.message || "فشل تسجيل الدخول";
})

.addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        // state.user = action.payload.user;
        // state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "فشل التسجيل";
      });
      
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
