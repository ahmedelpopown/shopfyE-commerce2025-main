// src/pages/Login.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {  loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(loginUser({ email, password, remember }))
    .unwrap()
    .then(() => {
      navigate("/home"); // ✅ روح للـ Home بعد تسجيل الدخول
    })
    .catch((err) => {
      console.log("فشل تسجيل الدخول:", err);
    });
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-xl rounded-2xl">
        
       
            <h2 className="mb-4 text-2xl font-bold text-center">تسجيل الدخول</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="كلمة المرور"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>تذكرني</span>
              </label>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "جاري الدخول..." : "دخول"  }
              </button>
              {error && (
                <p className="text-sm text-center text-red-500">{error}</p>
              )}
            </form>
        
 
    
      
      </div>
    </div>
  );
};

export default Login;
