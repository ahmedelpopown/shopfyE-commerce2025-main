// ✅ استدعاء axios
import axios from "axios";

// ✅ إنشاء نسخة مخصصة
const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // أو حسب رابط Laravel
  withCredentials: true, // لو Laravel بيستخدم الكوكيز
});

// ✅ إضافة التوكن تلقائيًا مع كل طلب
axiosClient.interceptors.request.use((config) => {
  const authData = JSON.parse(localStorage.getItem("persist:root"))?.auth;
  const parsed = authData ? JSON.parse(authData) : null;

  if (parsed?.token) {
    config.headers.Authorization = `Bearer ${parsed.token}`;
  }

  return config;
});

export default axiosClient;
