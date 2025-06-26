import { useState } from "react";
import { FilterContext } from "../context/FilterContext";

// eslint-disable-next-line react/prop-types
const FilterProvider = ({ children }) => {
const [filters, setFilters] = useState({
  categoryId: null,
  priceMin: null,
  priceMax: null,
  color: null,
  size: null,
  brand: null,
  page: 1, // 👈 هنا
});

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => setFilters({});

  return (
    <FilterContext.Provider value={{ filters, updateFilter, resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
