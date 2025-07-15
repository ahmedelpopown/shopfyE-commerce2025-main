import { useFilter } from "@/hooks/useFilter";
import { Star } from "lucide-react";
import { useState } from "react";

const RatingFilter = () => {
  const { updateFilter } = useFilter();
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    updateFilter("rating", rating); // ← الفلترة حسب التقييم
  };

  return (
    <div className="flex flex-col gap-2">
      <h4 className="mb-2 font-semibold">Average Rating</h4>
      {[5, 4   ].map((rating) => (
        <button
          key={rating}
          onClick={() => handleRatingClick(rating)}
          className={`flex items-center gap-1 text-sm hover:text-yellow-500 ${
            selectedRating === rating ? "text-yellow-500 font-bold" : "text-gray-600"
          }`}
        >
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
          ))}
          <span>{rating}  </span>
        </button>
      ))}
    </div>
  );
};

export default RatingFilter;
