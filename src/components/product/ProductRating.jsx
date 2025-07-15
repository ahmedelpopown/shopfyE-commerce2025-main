import axiosClient from "@/hooks/axiosClient";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductRating = () => {
  const { id: productId } = useParams();
  const { product } = useSelector((state) => state.productDetails);

  const [ratings, setRatings] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
const authData = localStorage.getItem("persist:auth");

let isLoggedIn = false;

if (authData) {
  const parsed = JSON.parse(authData);
  const user = parsed.user;

  if (user) {
    const userObject = JSON.parse(user);
    isLoggedIn = !!userObject?.id; // أو أي خاصية تتأكد منها
  }
}

console.log("هل المستخدم مسجل دخول؟", isLoggedIn);

  const handleSubmit = () => {
    if (userRating === 0 || review.trim() === "") {
      setError("من فضلك اختر عدد النجوم واكتب تقييمك.");
      return;
    }

    const data = {
      product_id: productId,
      ratings: userRating,
      review,
    };

    // لو الزائر، ابعت الاسم والإيميل
    if (!token) {
      data.name = name;
      data.email = email;
      if (name.trim() === "" || email.trim() === "") {
        setError("الاسم والبريد الإلكتروني مطلوبان.");
        return;
      }
    }

    axiosClient
      .post("/ratings", data, {
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
              withCredentials: true,
            }
          : {},
      })
      .then((res) => {
        setRatings([res.data, ...ratings]);
        setUserRating(0);
        setReview("");
        setName("");
        setEmail("");
        setError("");
      })
      .catch((err) => {
        console.error("فشل إرسال التقييم", err);
        setError("حدث خطأ أثناء الإرسال.");
      });
  };

  useEffect(() => {
    axiosClient
      .get(`/products/${productId}/ratings`)
      .then((res) => setRatings(res.data))
      .catch((err) => console.error(err));
  }, [productId]);

  const avgRating = ratings.length
    ? ratings.reduce((acc, r) => acc + r.ratings, 0) / ratings.length
    : 0;

  return (
    <div className="flex flex-row flex-wrap mt-6 md:flex-row md:items-start md:gap-8">
      {/* ✅ عرض التقييمات السابقة */}
      <div className="w-full space-y-4 md:w-[50%]">
        {ratings.length === 0 ? (
          <p className="text-sm text-gray-500">لا توجد تقييمات بعد.</p>
        ) : (
          ratings.map((r, index) => (
            <div key={index} className="p-3 bg-white border ">
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < r.ratings ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500">
                  ({r.user?.name ?? r.name ?? "مستخدم مجهول"})
                </span>
              </div>
              <p className="text-sm text-gray-700 break-words whitespace-pre-line">{r.review}</p>
            </div>
          ))
        )}
      </div>

      {/* ✅ إضافة تقييم جديد */}
      <div className="w-full space-y-4 md:w-[40%]">
        <h1 className="font-semibold uppercase">
          Be the first to review &quot;{product.name}&quot;
        </h1>
        <p className="text-sm text-gray-600">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* النجوم العامة */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(avgRating) ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            ({ratings.length} تقييم)
          </span>
        </div>

        {/* شرط المستخدم أو الزائر */}
        {isLoggedIn == true ? (
          <>
            <h5 className="font-semibold">أضف تقييمك:</h5>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  onClick={() => setUserRating(i + 1)}
                  className={`cursor-pointer text-2xl ${
                    i < userRating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <textarea
              className="w-full p-2 text-sm border rounded"
              placeholder="اكتب تعليقك (إجباري)"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              className="w-full p-2 mb-2 text-sm border rounded"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="w-full p-2 mb-2 text-sm border rounded"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  onClick={() => setUserRating(i + 1)}
                  className={`cursor-pointer text-2xl ${
                    i < userRating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <textarea
              className="w-full p-2 text-sm border rounded"
              placeholder="اكتب تعليقك (إجباري)"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </>
        )}

        {/* رسالة الخطأ وزر الإرسال */}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
        >
          إرسال التقييم
        </button>
      </div>
    </div>
  );
};

export default ProductRating;
