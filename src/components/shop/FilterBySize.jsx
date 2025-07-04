import { useEffect, useState } from "react";
import axios from "@/hooks/axiosClient";
import { useFilter } from "@/hooks/useFilter";

const FilterBySize = () => {
  const [sizes, setSizes] = useState([]);
   const [selectedSize, setSelectedSize] = useState(null);
const { filters, updateFilter } = useFilter();
useEffect(() => {
  axios.get("/sizes-web", {
    params: {
      color: filters.color,
      priceMin: filters.priceMin,
      priceMax: filters.priceMax,
    },
  })
    .then((res) => {
      setSizes(res.data.sizes || []);
    })
    .catch((err) => {
      console.error("❌ Error fetching sizes", err);
    });
}, [filters]); 

  const handleChange = (value) => {
    setSelectedSize(value);
    updateFilter("size", value); // ← لازم الـ backend يستقبلها بـ name
  };
  return (
    <div className="flex w-full h-auto gap-4">
      <div className="max-h-[300px] overflow-y-scroll p-3 rounded w-72 scrollbar-container">
        {sizes.map((size) => (
          <div
            key={size.id}
            className={`flex items-center justify-between gap-3 px-3 py-2 mb-2 rounded cursor-pointer select-none hover:text-[#04d39f] ${
              selectedSize === size.name ? "bg-gray-100 font-medium" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="size"
                value={size.name}
                checked={selectedSize === size.name}
                onChange={() => handleChange(size.name)}
                className="appearance-none w-4 h-4 rounded-sm bg-gray-400 checked:bg-[#04d39f] hover:bg-[#04d39f] border-none transition"
              />
              <span>{size.name}</span>
            </div>
            <span className="flex items-center justify-center text-sm text-center border rounded-lg h-7 w-7">
              {size.products_count ?? 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBySize;
