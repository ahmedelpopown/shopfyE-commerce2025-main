/* eslint-disable react/prop-types */
// components/StarRating.jsx
import { Star } from "lucide-react";

const StarRating = ({ rating = 0, max = 5 }) => {
  const filledStars = Math.floor(rating);
  const hasHalf = rating - filledStars >= 0.5;

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {/* النجوم الممتلئة */}
      {[...Array(filledStars)].map((_, i) => (
        <Star key={`filled-${i}`} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
      ))}

      {/* نصف نجمة */}
      {hasHalf && (
        <Star className="w-4 h-4 fill-yellow-300 stroke-yellow-500" />
      )}

      {/* النجوم الفارغة */}
      {[...Array(max - filledStars - (hasHalf ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 stroke-yellow-400" />
      ))}

      {/* نص التقييم */}
      
      <h4 className="flex justify-center ml-2 text-sm text-center text-gray-700">
          {(isNaN(Number(rating)) ? 0 : Number(rating)).toFixed(1)} / {max}  
        </h4>
    </div>
  );
};

export default StarRating;
