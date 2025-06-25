import { useState } from "react";
import { FaStar } from "react-icons/fa";

const InteractiveRating = ({ onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        return (
          <button
            key={index}
            type="button"
            onClick={() => {
              setRating(index);
              onRate && onRate(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <FaStar
              className={`w-4 h-4 cursor-pointer transition-colors ${
                index <= (hover || rating) ? "text-customTeal" : "text-gray-300"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default InteractiveRating;
