import { useEffect, useState } from "react";
import axiosClient from "@/hooks/axiosClient";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductRatingDisplay = () => {
  const { id: productId } = useParams();
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axiosClient
      .get(`/products/${productId}/ratings`)
      .then((res) => setRatings(res.data))
      .catch((err) => console.error("فشل جلب التقييمات", err));
  }, [productId]);

  const avgRating = ratings.length
    ? ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length
    : 0;

  return (
    <div className="mt-4">
      <h4 className="mb-1 text-lg font-bold"> </h4>
      <div className="flex items-center gap-1">
     {[...Array(5)].map((_, i) => (
   <FaStar
     key={i}
     className={i < Math.round(avgRating) ? "text-yellow-500" : "text-gray-300"}
   />
 ))}
        <span className="ml-2 text-sm text-gray-600">
          ({ratings.length}  ) customer reviews
        </span>
      </div>
    </div>
  );
};

export default ProductRatingDisplay;
